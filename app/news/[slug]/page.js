import { fetchAirtableTable } from '@/app/lib/airtable'
import { formatDateTime } from '@/app/lib/formatDate'
import Link from 'next/link'
import locationSvg from '../../img/location-sign.svg'
import Image from 'next/image'

export const revalidate = 60

export default async function News({ params }) {
  const data = await fetchAirtableTable('news')

  const decodedSlug = decodeURIComponent(params.slug)

  const news = data.find((n) => n.slug === decodedSlug)

  const logs = await fetchAirtableTable('news_logs')

  data.forEach((news) => {
    news.logs = []

    logs.forEach((log) => {
      if (news.id === log.parent_new[0]) {
        news.logs.push({
          source: log.source,
          date: log.date,
          description: log.title,
          created: log.created,
        })
      }
    })
  })

  function getSource(source) {
    const url = new URL(source)
    if (url.hostname.includes('www')) {
      return url.hostname.split('.')[1].toUpperCase()
    } else {
      return url.hostname
    }
  }

  return (
    <div className='news-detail'>
      <h1>{news.title}</h1>
      <p>
        <Image src={locationSvg} alt='Location' className='location-svg' width={12} height={12} />
        {news.location}
      </p>
      <p>
        <strong>Son güncelleme</strong>: {formatDateTime(news.updated)}
      </p>
      <p>
        <strong>Kaynak</strong>: <Link href={news.source}>{news.source}</Link>
      </p>
      <p>
        <strong>Zanlı(lar)</strong>: {news.suspects}
      </p>
      <p>
        <strong>Kurban(lar)</strong>: {news.victims}
      </p>
      <p>
        <strong>Özet</strong>: {news.description}
      </p>

      <div className='logs'>
        {news.logs &&
          news.logs.map((log, index) => (
            <div className='log-items' key={index}>
              <div className='log-item' key={index}>
                <div className='log-item-header'>
                  <a href={log.source}>
                    <span className='source'>{getSource(log.source)}</span>
                  </a>
                  <span className='date'>{formatDateTime(log.created)}</span>
                </div>
                <span className='description'>{log.description}</span>
              </div>
            </div>
          ))}
        <a href='https://airtable.com/appGCdm8zSGJP5ydL/pagzYQZwNN4wWmVwJ/form' className='btn'>
          + Yeni gelişme ekle
        </a>
      </div>
    </div>
  )
}

import { fetchAirtableTable } from "@/app/lib/airtable";
import { formatDateTime } from "@/app/lib/formatDate";
import Link from "next/link";

export default async function News({ params }) {
  const data = await fetchAirtableTable("news");

  const decodedSlug = decodeURIComponent(params.slug);

  const news = data.find((n) => n.slug === decodedSlug);

  const logs = await fetchAirtableTable("news_logs");

  data.forEach((news) => {
    news.logs = [];

    logs.forEach((log) => {
      if (news.id === log.parent_new[0]) {
        news.logs.push({
          source: log.source,
          date: log.date,
          description: log.title,
        });
      }
    });
  });

  return (
    <div className="news-detail">
      <h1>{news.title}</h1>
      <p>{news.location}</p>
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

      <div className="logs">
        <strong>Gelişmeler</strong>
        {news.logs &&
          news.logs.map((log, index) => (
            <p className="log-items" key={index}>
              <a href={log.source}>{formatDateTime(log.date)}</a> -{" "}
              {log.description}
            </p>
          ))}
        <a
          href="https://airtable.com/appGCdm8zSGJP5ydL/pagzYQZwNN4wWmVwJ/form"
          className="btn"
          target="_blank"
        >
          + Yeni gelişme ekle
        </a>
      </div>
    </div>
  );
}

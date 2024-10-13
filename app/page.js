import Search from "./components/Search/search";
import { fetchAirtableTable } from "./lib/airtable";
import { formatDateTime } from "./lib/formatDate";
import Link from "next/link";
import locationSvg from "./img/location-sign.svg";
import Image from "next/image";

export const revalidate = 60;

export default async function Home() {
  const data = await fetchAirtableTable("news");
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
    <>
      <section className="news">
        <div className="news-item static-widget">
          <p>
            Haber eklemek isterseniz, haberin platformda bulunup bulunmadığını
            kontrol edin.
          </p>
          <Search data={data} />
          <p>
            Eğer aradığınız haber platformda yer almıyorsa oluşturabilirsiniz.
          </p>
          <Link
            href="https://airtable.com/appGCdm8zSGJP5ydL/pagSAXkdbeAxobZu0/form"
            className="btn"
          >
            + Yeni haber ekle
          </Link>
        </div>
        {data &&
          data.map((item, index) => (
            <div className="news-item" key={index}>
              <Link href={`/news/${item.slug}`}>
                <h3>{item.title}</h3>
              </Link>
              <p className="location">
                <Image
                  className="location-svg"
                  src={locationSvg}
                  alt="location"
                  width={12}
                  height={12}
                />
                {item.location}
              </p>
              <div className="logs">
                <strong>Gelişmeler</strong>
                {item.logs &&
                  item.logs.map((log, index) => (
                    <p className="log-item" key={index}>
                      <a href={log.source}>{formatDateTime(log.date)}</a> -{" "}
                      {log.description}
                    </p>
                  ))}
                <Link
                  href="https://airtable.com/appGCdm8zSGJP5ydL/pagzYQZwNN4wWmVwJ/form"
                  className="btn"
                >
                  + Yeni gelişme ekle
                </Link>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

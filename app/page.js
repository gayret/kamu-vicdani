import { fetchAirtableTable } from "./lib/airtable";
import { formatDateTime } from "./lib/formatDate";

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
        {data &&
          data.map((item, index) => (
            <div className="news-item" key={index}>
              <h2>{item.title}</h2>
              <p className="location">{item.location}</p>
              <p>
                <strong>Son güncelleme</strong>: {formatDateTime(item.updated)}
              </p>
              <p>
                <strong>Zanlı(lar)</strong>: {item.suspects}
              </p>
              <p>
                <strong>Kurban(lar)</strong>: {item.victims}
              </p>
              <p>
                <strong>Özet</strong>: {item.description}
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
                <a
                  href="https://airtable.com/appGCdm8zSGJP5ydL/pagzYQZwNN4wWmVwJ/form"
                  className="btn"
                  target="_blank"
                >
                  + Yeni gelişme ekle
                </a>
              </div>
            </div>
          ))}

        <div className="news-item">
          <a
            href="https://airtable.com/appGCdm8zSGJP5ydL/pagSAXkdbeAxobZu0/form"
            className="btn"
            target="_blank"
          >
            + Yeni haber ekle
          </a>
        </div>
      </section>
    </>
  );
}

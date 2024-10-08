import Search from "./components/Search/search";
import { fetchAirtableTable } from "./lib/airtable";
import { formatDateTime } from "./lib/formatDate";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const data = (await fetchAirtableTable("news")).reverse();
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
          <strong>Kamu Vicdanı</strong>

          <p>
            Kar amacı gütmeyen bir platformdur, içerikleri ziyaretçiler
            tarafından oluştururlur.
          </p>
          <p>
            İçerikler yorum içermez, kaynaklarda geçen ifadelerden fazlasına yer
            verilmez.
          </p>
          <p>
            Haber eklemek isterseniz, daha önce platformda olup olmadığını
            kontrol edin.
          </p>
          <Search data={data} />
          <p>
            Eğer aradığınız haber platformda yer almıyorsa, oluşturabilirsiniz.
          </p>
          <Link
            href="https://airtable.com/appGCdm8zSGJP5ydL/pagSAXkdbeAxobZu0/form"
            className="btn"
          >
            + Yeni haber ekle
          </Link>
          <p>
            Platformun tüm detayları ziyaretçiler tarafından yeniden
            kurgulanabilir. Açık kaynak standartlarında geliştirilmiştir.
          </p>
        </div>
        {data &&
          data.map((item, index) => (
            <div className="news-item" key={index}>
              <Link href={`/news/${item.slug}`}>
                <h3>{item.title}</h3>
              </Link>
              <p className="location">{item.location}</p>
              <p>
                <i>
                  <strong>Son güncelleme</strong>:{" "}
                  {formatDateTime(item.updated)}
                </i>
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

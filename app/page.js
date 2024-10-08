import data from "./data.json";
export default function Home() {
  return (
    <>
      <section className="news">
        {data &&
          data.map((item, index) => (
            <div className="news-item" key={index}>
              <h2>{item.title}</h2>
              <p className="location">{item.location}</p>
              <p>Son güncelleme: {item.updated}</p>
              <p>
                <strong>Zanlı(lar)</strong>: {item.suspects.join(", ")}
              </p>
              <p>
                <strong>Kurban(lar)</strong>: {item.victims.join(", ")}
              </p>
              <p>
                <strong>Özet</strong>: {item.description}
              </p>
              <div className="logs">
                {item.logs &&
                  item.logs.map((log, index) => (
                    <p key={index}>
                      <a href={log.source}>{log.date}</a> - {log.description}
                    </p>
                  ))}
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

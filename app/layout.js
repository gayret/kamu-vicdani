import "./globals.css";

export const metadata = {
  title: "Kamu Vicdanı",
  description: "Halkın vicdanını sızlatan olaylar, failler ve akıbetleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Kamu Vicdanı</h1>
          <p>Halkın vicdanını sızlatan olaylar, failler ve akıbetleri</p>
        </header>

        <main>{children}</main>

        <footer>
          <p>
            <a href="https://github.com/gayret" target="_blank">
              Safa Gayret
            </a>{" "}
            tarafından geliştirildi.
          </p>
          <p>
            Kamu Vicdanı, içerikleri{" "}
            <a href="https://github.com/gayret/kamu-vicdani" target="_blank">
              ziyaretçiler tarafından sağlanan
            </a>{" "}
            özgür bir platformdur.
          </p>
        </footer>
      </body>
    </html>
  );
}

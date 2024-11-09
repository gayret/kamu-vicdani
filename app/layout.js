import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata = {
  title: 'Kamu Vicdanı',
  description: 'Halkın vicdanını sızlatan olaylar, failler ve akıbetleri',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

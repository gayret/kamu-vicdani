import './globals.css'
import Link from 'next/link'
import VisitCounter from './components/VisitCounter/visitCounter'

export const metadata = {
  title: 'Kamu Vicdanı',
  description: 'Halkın vicdanını sızlatan olaylar, failler ve akıbetleri',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Link href='/'>
            <h2>Kamu Vicdanı</h2>
          </Link>
          <p>Halkın vicdanını sızlatan olaylar, failler ve akıbetleri</p>
        </header>

        <main>{children}</main>

        <footer>
          <VisitCounter />
          <ul className='links'>
            <li>
              <Link href='/'>Haberler</Link>
            </li>

            <li>
              <Link href='/about'>Hakkımızda</Link>
            </li>

            <li>
              <Link href='/disclaimers'>Sorumluluk reddi beyanı</Link>
            </li>

            <li>
              <Link href='/contact'>İletişim</Link>
            </li>
          </ul>
          <p>
            Kamu Vicdanı, içerikleri{' '}
            <Link href='https://github.com/gayret/kamu-vicdani'>
              ziyaretçiler tarafından sağlanan
            </Link>{' '}
            özgür bir platformdur.
          </p>
        </footer>
      </body>
    </html>
  )
}

import VisitCounter from '../VisitCounter/visitCounter'
import Link from 'next/link'

export default function Footer() {
  return (
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
        <Link href='https://github.com/gayret/kamu-vicdani'>ziyaretçiler tarafından sağlanan</Link>{' '}
        özgür bir platformdur.
      </p>
    </footer>
  )
}

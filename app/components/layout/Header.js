import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <h2>Kamu Vicdanı</h2>
        <p>Halkın vicdanını sızlatan olaylar, failler ve akıbetleri</p>
      </Link>
    </header>
  )
}

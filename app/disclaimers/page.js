import Link from 'next/link'

export const metadata = {
  title: 'Sorumluluk reddi beyanı - Kamu Vicdanı',
  description: 'Halkın vicdanını sızlatan olaylar, failler ve akıbetleri',
}

export default function Disclaimers() {
  return (
    <div className='static-page disclaimers'>
      <h1>Sorumluluk reddi beyanı</h1>
      <p>
        Kamu Vicdanı platformunda yer alan haberler ve gelişmeler, kaynak belirtilerek yayınlanır.
      </p>
      <p>Haberlerin aslı ve tam versiyonu kaynaklarda mevcuttur.</p>
      <p>Kamu Vicdanı platformunda haberlerde yer alan ifadelerden fazlası bulunmaz.</p>
      <p>Haber kaynaklarından adil kullanım koşullarını ihlal etmeyecek biçimde istifade edilir.</p>
      <p>
        Kamu Vicdanı platformuna girilmiş haberler, haberin aslının yer aldığı kaynaktan kaldırılsa
        bile Kamu Vicdanı platformuna bildirilmediği sürece görünür olmaya devam eder.
      </p>
      <p>
        İtiraz ve benzeri durumlar için <Link href='/contact'>iletişim</Link> sayfasına
        başvurabilirsiniz.
      </p>
    </div>
  )
}

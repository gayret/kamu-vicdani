export const metadata = {
  title: 'Hakkımızda - Kamu Vicdanı',
  description: 'Halkın vicdanını sızlatan olaylar, failler ve akıbetleri',
}

export default function About() {
  return (
    <div className='static-page about'>
      <h1>Hakkımızda</h1>
      <h2>Nedir</h2>
      <p>Kamu Vicdanı, içerikleri ziyaretçiler tarafından sağlanan özgür bir platformdur.</p>
      <p>İçerikleri gibi kodları da ziyaretçiler tarafından güncellenir.</p>

      <h2>Amaç</h2>
      <p>
        Platformun amacı ülkemizde yaşanan vicdanları sızlatan olayları bu olayların faillerini ve
        faillerin akıbetlerini arşivlemektir.
      </p>
      <p>Böylece suçluların başlarına gelenlerin takibini kolaylaştırır.</p>
      <p>
        Ve tüm bu gelişmelerin halk tarafından kolayca öğrenmesini sağlar. Bu sayede biraz olsun
        vicdanları rahatlatır.
      </p>

      <h2>Haber kaynakları</h2>
      <p>İçerikler ziyaretçiler tarafından ilgili formlar doldurularak girilir.</p>
      <p>
        Editörler bu formlardan gelen bilgileri, yine formlarda belirtilen haber kaynaklarıyla
        karşılaştırır.
      </p>
      <p>
        Editörler kaynak karşılaştırmasında tutarlılığı gördüğünde ilgili haberin sistemde görünür
        olmasını sağlar.
      </p>
    </div>
  )
}

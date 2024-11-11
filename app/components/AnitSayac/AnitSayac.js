import Link from 'next/link'
export default function AnitSayac() {
  return (
    <div className='anit-sayac'>
      <Link href='https://www.anitsayac.com/'>
        <strong>Anıt Sayaç</strong>
        <p>ŞİDDETTEN ÖLEN KADINLAR İÇİN DİJİTAL ANIT</p>
        <img src='//image.thum.io/get/width/200/crop/600/http://www.anitsayac.com/' />
      </Link>
    </div>
  )
}

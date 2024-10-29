'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function VisitCounter() {
  const pathname = usePathname()

  function imageSourceGenerator() {
    return `https://visit-counter.vercel.app/counter.png?page=kamuvicdani.org${pathname}&bg=222222`
  }

  return (
    <div className='visit-counter'>
      <Image
        className='visit-counter-img'
        src={imageSourceGenerator()}
        alt='visit-counter'
        width={50}
        height={50}
      />
      <span>Sayfanın şimdiye kadar görüntülenme sayısı</span>
    </div>
  )
}

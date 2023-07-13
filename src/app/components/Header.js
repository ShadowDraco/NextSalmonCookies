'use client'
import Link from 'next/link'
import Image from 'next/image'
import images from '../assets/images'

export default function Header({ page }) {
  return (
    <header>
      <div className='hero w-full'>
        <Image
          src={images['heroImg']}
          alt=''
          width={images['heroImg'].width}
          height={images['heroImg'].height}
          priority
        />
      </div>

      <nav>
        <ul>
          <li>
            <Link href={page === 'home' ? '/sales' : '/'}>
              {page === 'home' ? 'Cookie Stand Sales' : 'Swim on Home'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

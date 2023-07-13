'use client'
import Image from 'next/image'
import images from './assets/images'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header page={'home'} />

      <main className='w-11/12 mx-auto flex min-h-screen flex-col items-center justify-between p-24 bg-[#fff9f0] p-[10px]'>
        <section className='history'>
          <h2>How We Came to be</h2>
          <p>
            Pat came up with a business idea by combining his love for sweets
            and his passion for healthy ecosystems. He has developed a recipe
            for a coffee-time confection called Salmon Cookies. These cookies
            made into the shape of a salmon and are suitable for both humans and
            salmon to enjoy.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            illo sed voluptates odit ad quo, eius totam id nostrum harum ullam
            unde consequuntur hic accusamus, vero, repellendus nihil tempora
            reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque dolor odio, voluptatum ex est numquam ea eligendi ullam
            debitis amet blanditiis aperiam reprehenderit, dolorum animi tempora
            saepe, nam aspernatur sunt?
          </p>
        </section>

        <section className='storeInfo'>
          <h4 className='text-center'>Our Store Locations</h4>
          <p className='text-center'>
            All our stores are open 06:00am - 08:00pm, 7 Days a Week!
          </p>

          <section className='stores flex flex-row justify-around space-x-2 '>
            {[1, 2, 3, 4, 5].map((number, i) => {
              return (
                <div key={i} className='flex flex-col justify-between'>
                  <Image
                    src='https://place-hold.it/200x125/ddd/000.png&text=locationImage'
                    alt=''
                    width={200}
                    height={125}
                  />

                  <h6 className='text-center'>Store Location {number}</h6>
                  <address className='flex flex-col mx-auto'>
                    <span className='block'>{i}23 Shop Location</span>
                    <span className='block'>City, ST 12345</span>
                    <a href='tel:+1234567890'>(123) 456-7890</a>
                    <a href='mailto:email@cookieStand.com'>
                      email@cookieStand.com
                    </a>
                  </address>
                </div>
              )
            })}
          </section>
        </section>
        <section className='indexGallery'>
          <div className='sectionHeader'>
            <h4 className='text-center'>Feature Gallery</h4>
            <p className='text-center'>Collection of Images from our stores</p>
          </div>
          <div className='galleryImages flex flex-wrap justify-around items-center'>
            {Object.entries(images).map((image, i) => {
              return image[0] !== 'heroImg' ? (
                <Image
                  key={i}
                  src={image[1].src}
                  width={image[1].width}
                  height={image[1].height}
                  alt=''
                />
              ) : (
                ''
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

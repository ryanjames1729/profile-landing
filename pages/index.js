import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import myImg from '../img/James_Ryan_800px.jpg'
// import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className="md:h-screen">
      <main className="md:h-10 mb-auto items-center">

        <section>
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center sm:py-4">
            <div className="flex flex-col mt-24 md:flex-col md:space-x-6 md:px-20 md:mx-1">
              <div className="flex-col items-center p-6 space-y-6 rounded-lg md:flex bg-lightGray"> 
                <Image 
                  src={myImg}
                  width={300}
                  height={300}
                  className="rounded-full w-16 -mt-14"
                />
                <h5 className="text-xl font-bold">
                  Ryan James
                </h5>
                <p className="text-sm">
                  I am a teacher with 13 years of experience teaching AP level computer science and mathematics to high school students. I’ve spent the majority of that time learning and teaching computer science, starting computer science programs at 3 different schools. In addition to teaching, I spend time as a consultant writing computer science curriculum for different organizations.
                  <br />
                  <br />
                  Although I have an interest in algorithms from my background studying mathematics, lately I’ve been investing my time in developing websites using different frameworks. Currently I am taking a deeper live into Next.js after spending my previous years using Flask with Python.

                </p>
              </div>
            </div>
        </div>
        </section>

        
      </main>
      
    </div>
  )
}

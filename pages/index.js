import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedIn, AiFillYoutube } from 'react-icons/ai';


export default function Home() {
  return (
    <div>
      <Head>
          <title>React Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbydave</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>

              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500
                text-white px-4 py-2 rounded-md ml-8' 
                href='#'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2>David Okaliwe</h2>
            <h3>Developer and Designer</h3>
            <p>
              Experienced top-notch developer and creative designer with
              over 6 years of experience of providing amazing services.
              Join me below let's get to it!
            </p>
          </div>

          <div>
            <a href=''><AiFillTwitterCircle /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
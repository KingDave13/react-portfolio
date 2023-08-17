import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { 
  AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube 
} from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
          <title>React Portfolio</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>developedbydave</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl'
                />
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

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium 
            dark:text-teal-400 md:text-6xl'>
              David Okaliwe
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Developer | Designer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 
            dark:text-gray-300 max-w-xl mx-auto md:text-xl'>
              Experienced top-notch developer and creative designer with
              over 6 years of experience of providing amazing services.
              Join me below let's get to it!
            </p>
          </div>

          <div className='text-4xl flex justify-center gap-5 
          py-3 text-gray-600 dark:text-gray-400'>
            <a href='#'><AiFillTwitterCircle /></a>
            <a href='#'><AiFillLinkedin /></a>
            <a href='#'><AiFillYoutube /></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 
          rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div className='text-center'>
            <h3 className='text-3xl font-bold mt-7 py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md font-medium mb-5 leading-8 text-gray-800 dark:text-gray-200'>
              Since my journey in the tech ecosystem began,
              I've worked for <span className='text-teal-500'> agencies, 
              </span> consuted for <span className='text-teal-500'>
              startups </span> and collaborated with talented people 
              to create digital products for both business and consumer 
              use. 
            </p>
            <p className='text-md   text-gray-800 dark:text-gray-200'>
              I offer a wide range of services, including brand design, 
              programming and teaching.

            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10
            dark:bg-white flex-1'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs
                following design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>InDesign</p>
              <p className='text-gray-800 py-1'>Figma amon</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10
            dark:bg-white flex-1'>
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Code your dream project
              </h3>
              <p className='py-2'>
                Do you have an idea for your next great website?
                 Let's make it a reality.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>InDesign</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10
            dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Consulting
              </h3>
              <p className='py-2'>
                Are you interested in feedback for your current project? 
                I can give you tips and tricks to level it up.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>InDesign</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 mt-3 font-bold dark:text-white'>Portfolio</h3>
          </div>

          <div className='flex flex-col gap-10 py-5 pb-12 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web1}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web2}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web3}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web4}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web5}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

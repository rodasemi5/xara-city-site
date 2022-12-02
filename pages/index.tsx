import Head from 'next/head'

import { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { NFT } from '../components/NFT'
import { Xaraverse } from '../components/Xaraverse'
import { Faq } from '../components/Faq'
import { FooterMain } from '../components/Footer'
import { Team } from '../components/Team'

const Home: NextPage = () => {
  return (

    <main >    
    <Head>
        <title>Xara City Site</title>
        <meta name="description" content="Xara City Website" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
				<link rel="icon" href="/icons/android-chrome-192x192.png" sizes="192x192" />
				<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </Head>

    <div className="flex w-full flex-col items-center justify-center space-y-4 space-x-0  bg-black overflow-hidden">
            <div className='phone:px-16 px-6 flex justify-center items-center'>
              <div className='xl:max-w-[1280px] w-full'></div>
              <Navbar />
            </div>

            <div className='flex justify-center items-start bg-black'>
              <div className='xl:max-w-[1280px] w-full phone:w-full'>
                  <Main />
              </div>
            </div>  

            <div className='flex justify-center items-start sm:px-16  bg-black'>
              <div className='xl:max-w-[1280px] w-full'>
                  <NFT />
                  <Xaraverse/>
                  <Faq />
                  <Team />
                  <FooterMain />
              </div>
            </div>           
  </div>
</main>
  )
}


export default Home

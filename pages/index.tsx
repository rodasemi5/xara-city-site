import Head from 'next/head'

import { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { NFT } from '../components/NFT'

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

    <div className="con w-full h-full flex flex-col justify-center items-center overflow-auto  bg-gradient-to-b from-purple-500 via-black to-black">
               <Navbar />
               <Main />
               <NFT />
  </div>

  
</main>
  )
}


export default Home

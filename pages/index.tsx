import Head from 'next/head'

import { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'

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

    <div className="w-[100vw] h-[100vh]  flex flex-col justify-start items-center p-4 bg-cover bg-gradient-to-b from-purple-500 via-black to-black">
               <Navbar />
               <Main />
  </div>

  
</main>
  )
}


export default Home

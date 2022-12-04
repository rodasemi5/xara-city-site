import Head from "next/head";

import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { Main } from "../../components/Main";
import { NFT } from "../../components/NFT";
import { Xaraverse } from "../../components/Xaraverse";
import { Faq } from "../../components/Faq";
import { FooterMain } from "../../components/Footer";
import { Team } from "../../components/Team";
import toast, { Toaster } from 'react-hot-toast';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Xara City Site</title>
        <meta name="description" content="Xara City Website" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" />
        <link
          rel="icon"
          href="/icons/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </Head>

      <div className="flex w-full flex-col items-center justify-center space-x-0 md:flex-row md:space-x-4 bg-black overflow-hidden">
        <div id="nav" className="w-full">
          <div className="tablet:px-16 px-6 flex justify-center items-center">
            <Navbar />
          </div>
        </div>

        <div className="flex justify-center items-start  bg-black">
          <div className="w-full">
		    <Toaster />
            <Main />
            <NFT />
            <Xaraverse />
            <Faq />
            <Team />
            <FooterMain />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Xaraverse = () => {
  const [value, setValue] = React.useState(0);

  return (
    <section id="xaraverse" className=" w-full flex md:flex-row flex-col items-start pt-18 bg-[#020117]">
      <div className="w-[98vw] m-auto flex flex-col items-center">
        <h1
          className="
            text-6xl
            font-bold 
            text-gray-900 md:text-5xl lg:text-6xl 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            text-transparent
            bg-clip-text
            mb-5
            text-center
            "
        >
          Enter the Xaraverse
        </h1>
        <p
          className=" 
            font-semibold 
            text-[#7B8594]
            dark:text-gray-400
            text-xl
            m-10
            -mt-4
            text-center
            "
        >
          A hyper-realistic, digital world with fully Immersive 3D virtual
          experience
        </p>

        <div className="w-full mb-0 relative">
          <div
            id="video-container"
            className="aspect-w-16 aspect-h-9 pb-[56.65%] h-0 relative  z-[5] mb-0 "
          >
            {/* <video width="100%" autoPlay muted controls={false} loop>
              <source src="https://youtu.be/embed/jDL9PjY-8Oc" />
              Your browser does not support the video tag.
            </video> */}
            <iframe
              src="https://www.youtube.com/embed/jDL9PjY-8Oc?playlist=jDL9PjY-8Oc&autoplay=1&muted=1&loop=1&rel=0&showinfo=0&controls=0"
              width="640"
              height="360"
              className="rounded-xl"
            ></iframe>
            <button className="z-10  absolute text-white h-10 w-32 laptop:h-16 laptop:w-60 rotate-90 rounded-lg text-lg laptop:text-2xl bg-[#304AB1] left-[-3.2rem] laptop:left-[-6rem] top-1/2  ">
              View Map
            </button>
            <button className="z-10 align-right absolute text-white h-10 w-32 laptop:h-16 laptop:w-60  -rotate-90 rounded-lg text-lg laptop:text-2xl bg-[#9E1DA1] right-[0%] right-[-3.2rem] laptop:right-[-6rem] top-1/2 ">
              Enter Demo
            </button>
          </div>
        </div>

        <div className="relative flex flex-col bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
          <Box className="w-full">
            <TabPanel value={value} index={0}>
              <div>
                <h1
                  className="
                    mt-14
                    laptop:ml-12
                    font-bold 
                    text-3xl
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    text-transparent
                    bg-clip-text
                    text-center
                    w-full laptop:w-1/2
                    laptop:text-left"
                >
                  XARA CITY ECOSYSTEM OVERVIEW
                </h1>
                <div className="flex flex-col laptop:flex-row">
                  <div className="laptop:pt-4 pb-10 laptop:pb-20 m-auto laptop:ml-10 w-full laptop:w-1/2 ">
                    <div className="w-full">
                      <p className="mt-2 mb-2 text-xl font-thin text-[#7B8594] w-full text-center laptop:text-left m-auto">
                        &#8226; Bid, Buy, and Sell NFTs or Rent Virtual
                        Apartments via the Xara City Market Place
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
              w-full
              text-center
              laptop:text-left
              m-auto
                "
                      >
                        &#8226; Stake NFTs in the Xara City Play-To-Earn
                        property development game and earn XARA as a staking
                        reward
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Spend XARA earned from staking in the Xaraverse
                        (metaverse) on VR experience such as shopping, casino,
                        games, educational seminars and trading, theme parks and
                        more...
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Swap or Trade USD for XARA to spend in-game,
                        funds Liquidity Pools to earn yield on Trading fees, or
                        take a DeFi loan..
                      </p>
                    </div>
                  </div>

                  <div className="aspect-w-16 aspect-h-9 laptop:pt-0 pb-20 pl-12 pr-12 rounded-xl m-auto laptop:m-20 laptop:-mt-4 w-[90%] h-[90%] max-w-[640px] max-h-[360px] laptop:w-[640px] laptop:h-[360px]">
                    <iframe
                      src="https://www.youtube.com/embed/yxCoyxHdXT4?playlist=yxCoyxHdXT4&autoplay=1&muted=1&loop=1&rel=0&showinfo=0&controls=0"
                      width="100%"
                      height="100%"
                      aria-controls="0"
                      frameBorder="0"
                      className="rounded-xl"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <h1
                  className="
                    mt-14
                    laptop:ml-12
                    font-bold 
                    text-3xl
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    text-transparent
                    bg-clip-text
                    text-center
                    w-full laptop:w-1/2
                    laptop:text-left"
                >
                  PLAY-TO-EARN PROPERTY DEVELOPMENT BLOCKCHAIN GAME
                </h1>
                <div className="flex flex-col laptop:flex-row">
                  <div className="laptop:mt-4 pb-10 laptop:pb-20 m-auto laptop:ml-10 w-full laptop:w-1/2 ">
                    <div className="w-full">
                      <p className="mt-2 mb-2 text-xl font-thin text-[#7B8594] w-full text-center laptop:text-left m-auto">
                        &#8226; Stake Land Site NFTs and Building NFTs to earn
                        up to 185 $Xara per month as a staking reward
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
              w-full
              text-center
              laptop:text-left
              m-auto
                "
                      >
                        &#8226; Upgrade Key NFTs into VR NFTS with Virtual
                        Apartments to sell, rent out or stake and earn up to 315
                        $Xara per month
                      </p>
                    </div>
                  </div>

                  <div className="aspect-w-16 aspect-h-9 laptop:pt-0 pb-20 pl-12 pr-12 rounded-xl m-auto laptop:m-20 laptop:-mt-12 w-[90%] h-[90%]  laptop:w-[640px] laptop:h-[360px]">
                    <iframe
                      src="https://www.youtube.com/embed/p_GDohB4F14?playlist=p_GDohB4F14&autoplay=1&muted=1&loop=1&rel=0&showinfo=0&controls=0"
                      width="100%"
                      height="100%"
                      aria-controls="0"
                      frameBorder="0"
                      className="rounded-xl"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <h1
                  className="
                    mt-14
                    laptop:ml-12
                    font-bold 
                    text-3xl
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    text-transparent
                    bg-clip-text
                    text-center
                    w-full laptop:w-1/2
                    laptop:text-left"
                >
                  ENTER THE XARAVERSE – A FULLY IMMERSIVE 3D VR METAVERSE
                </h1>
                <div className="flex flex-col laptop:flex-row">
                  <div className="laptop:pt-4 pb-10 laptop:pb-20 m-auto laptop:ml-10 w-full laptop:w-1/2 ">
                    <div className="w-full">
                      <p className="mt-2 mb-2 text-xl font-thin text-[#7B8594] w-full text-center laptop:text-left m-auto">
                        &#8226; The Xaraverse is a Hyper-realistic digital world
                        with fully Immersive 3D Virtual Experiences, coupled
                        with a fully functioning shared economy.
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
              w-full
              text-center
              laptop:text-left
              m-auto
                "
                      >
                        &#8226; The Xaraverse is an always-on digital
                        environment where visitors can shop, socialise, train
                        for their jobs, play games, take classes, attend
                        meetings, have cultural experiences and more…
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; The Xaraverse is poised to radically change how
                        we work, play and connect.tional seminars and trading,
                        theme parks and more...
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Spend $Xara earned in-game on VR Experiences…
                      </p>
                    </div>
                  </div>

                  <div className="aspect-w-16 aspect-h-9 laptop:pt-0 pb-20 pl-12 pr-12 rounded-xl m-auto laptop:m-20 laptop:-mt-4 w-[90%] h-[90%] max-w-[640px] max-h-[360px] laptop:w-[640px] laptop:h-[360px]">
                    <iframe
                      src="https://www.youtube.com/embed/D8PAF0FzwuM?playlist=D8PAF0FzwuM&autoplay=1&muted=1&loop=1&rel=0&showinfo=0&controls=0"
                      width="100%"
                      height="100%"
                      aria-controls="0"
                      frameBorder="0"
                      className="rounded-xl"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div>
                <h1
                  className="
                    mt-14
                    laptop:ml-12
                    font-bold 
                    text-3xl
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    text-transparent
                    bg-clip-text
                    text-center
                    w-full laptop:w-1/2
                    laptop:text-left"
                >
                  XARA CITY MARKET PLACE, EXCHANGE, LIQUIDITY POOLS AND TRADING
                  PLATFORM
                </h1>
                <div className="flex flex-col laptop:flex-row">
                  <div className="laptop:pt-4 pb-10 laptop:pb-20 m-auto laptop:ml-10 w-full laptop:w-1/2 ">
                    <div className="w-full">
                      <p className="mt-2 mb-2 text-xl font-thin text-[#7B8594] w-full text-center laptop:text-left m-auto">
                        &#8226; Buy or Bid on Xara City NFTS, Fractionalized
                        Assets or Rare One of One NFTS…
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
              w-full
              text-center
              laptop:text-left
              m-auto
                "
                      >
                        &#8226; Rent Virtual Apartments in the Xaraverse…
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Mint Event or Raffle Tickets as NFTS…
                      </p>

                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Get White Listed for Future Projects…
                      </p>
                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Swap USD for $Xara to spend in the Xara City
                        Market Place or Xaraverse
                      </p>
                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Fund Liquidity pools to earn yield on trading
                        fees or stake LP tokens in Farms to earn APR
                      </p>
                      <p
                        className="
                        mt-2 mb-2 
              text-xl
              font-thin
              text-[#7B8594]
              inline-block
              bg-clip-text
w-full
text-center
laptop:text-left
m-auto
                "
                      >
                        &#8226; Stake $Xara to earn an APR, take a DeFi loan or
                        trade $Xara on the trading platform
                      </p>
                    </div>
                  </div>

                  <div className="aspect-w-16 aspect-h-9 laptop:pt-0 pb-20 pl-12 pr-12 rounded-xl m-auto laptop:m-20  w-[90%] h-[90%] max-w-[640px] max-h-[360px] laptop:w-[640px] laptop:h-[360px]">
                    <iframe
                      src="https://www.youtube.com/embed/X_br-ntZqOo?playlist=X_br-ntZqOo&autoplay=1&muted=1&loop=1&rel=0&showinfo=0&controls=0"
                      width="100%"
                      height="100%"
                      aria-controls="0"
                      frameBorder="0"
                      className="rounded-xl"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Box>
          <div className="absolute right-0 laptop:right-16 -bottom-6 laptop:bottom-0 p-10 justify-between">
            <button
              onClick={() => {
                if (value == 0) {
                  setValue(3);
                } else {
                  setValue(value - 1);
                }
              }}
              className=" h-12 w-12 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full item-center p-2 m-4"
            >
              <img src="/icons8-forward-100.png" className="rotate-180" />
            </button>
            <button
              onClick={() => {
                if (value == 3) {
                  setValue(0);
                } else {
                  setValue(value + 1);
                }
              }}
              className=" h-12 w-12 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-4xl rounded-full item-center p-2 m-4"
            >
              <img src="/icons8-forward-100.png" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

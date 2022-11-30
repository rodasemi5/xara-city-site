import { Carousel, Accordion } from "flowbite-react"

export const Xaraverse = () => {
  return (

    <section id="home" className=" w-[100vw] flex md:flex-row flex-col sm:py-16  justify-start items-start">
        <div className="flex flex-col justify-start items-center">
      <h1 className="
            flex-1
            ss:text-[72px]
            ss:leading-[100px]
            text-6xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            mb-5
            "
            >Enter the Xaraverse
            </h1>
            <p className=" 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-3xl
            m-10
            "
            >A hyper-realistic, digital world with fully Immersive 3D virtual experience</p>

            <img src="/xaraverse.png" className="w-[100vw] mb-32 items-start justify-start"/>


            <div className="w-[100%] flex flex-row bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
            
            <div className=" flex flex-col p-20 -mt-10 ml-10">
            <h1 className="
            m-2
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            mb-5
            "
            >Ecosystem overview
            </h1>

            <p className="
                m-2
                text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the Xara City <br></br> Market Place</p>


            <p className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Stake NFTs in the Xara City Play-To-Earn property development game <br></br> and earn XARA as a staking reward</p>


            <p className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Spend XARA earned from staking in the Xaraverse (metaverse) on VR <br></br> experience such as shopping, casino, games, educational seminars <br></br> and trading, theme parks and more...</p>
            
            <p className="
                m-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Swap or Trade USD for XARA to spend in-game, funds Liquidity Pools to <br></br> earn yield on trading dees, or stake XARA tp earn on APR.</p>

            </div>

            <div className="aspect-w-16 aspect-h-9 mt-2  desktop:ml-52">
              <iframe src="https://www.youtube.com/embed/Z_BiOBlOnj8" width="640" height="360" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

       

            </div>

            
      
    </div>

    </section>
    
  )
}


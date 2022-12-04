import { Carousel, Accordion } from "flowbite-react"

export const Xaraverse = () => {
  return (

    <section id="xaraverse" className=" w-32 laptop:w-[100vw] flex flex-col-reverse laptop:flex-row  laptop:py-6 items-start">
        <div className="flex flex-col  laptop:justify-start items-start laptop:items-center text-center">
      <h1 className="
            phone:ml-24
            laptop:ml-0
            flex-1
            ss:text-[72px]
            ss:leading-[100px]
            text-2xl
            laptop:text-6xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            -mb-10
            laptop:mb-5
            "
            >Enter the Xaraverse
            </h1>
            <p className=" 
            phone:ml-4
            laptop:ml-0
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-md
            laptop:text-3xl
            m-10
            tracking-tight 
            leading-none 
            "
            >A hyper-realistic, digital world with fully Immersive <br className=" laptop:hidden"></br> 3D virtual experience</p>

            <img src="/xaraverse.png" className="w-[100vw] mb-32 "/>


            <div className=" w-[500px] laptop:w-[100%] flex flex-row bg-[#0b091a] rounded border-t-1 border-slate-500 items-center">
            
            <div className=" flex flex-col p-10 laptop:p-20 -mt-10 mr-20 laptop:mr-0 laptop:ml-10 text-start laptop:text-start">
            <h1 className="
            m-2
            ss:text-[72px]
            ss:leading-[100px]
            text-xl
            laptop:text-4xl
            font-bold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            laptop:mb-5
            "
            >Ecosystem overview
            </h1>

            <p className="
                m-2
                text-md
                laptop:text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Bid, Buy, and Sell NFTs or Rent Virtual Apartments via the Xara City <br className=" hidden laptop:flex"></br> Market Place</p>


            <p className="
                m-2
                text-md
                laptop:text-lg
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
                text-md
                laptop:text-lg
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
                text-md
                laptop:text-lg
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">- Swap or Trade USD for XARA to spend in-game, funds Liquidity Pools to <br></br> earn yield on trading dees, or stake XARA tp earn on APR.</p>

            </div>

            <div className="aspect-w-16 aspect-h-9 mt-2 hidden tablet:flex desktop:ml-52">
              <iframe src="https://www.youtube.com/embed/Z_BiOBlOnj8" width="640" height="360" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

       

            </div>

            
      
    </div>

    </section>
    
  )
}




export const Main = (props: any)=> {

    return (
        <section id="home" className=" laptop:w-[100vw] flex phone:flex-col flex-col mt-1 justify-center items-center ">
            
        <div className="flex flex-1 flex-row  justify-center desktop:px-0 phone:items-center tablet:items-start   whitespace-nowrap ">

            <div className="flex flex-col justify-between  phone:text-center laptop:items-start  mt-10 ml-1">
            <h1 className="
            flex-1
            ss:text-[72px]
            ss:leading-[100px]
            text-6xl
            tablet:text-6xl
            font-extrabold 
            tracking-tight 
            leading-[75px]
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text
            "
            >Welcome to 
            </h1>
             <span className="
            mb-4 
            text-6xl 
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text"
            >Xara City</span> 
            
            <span className="
            mb-2
            font-extrabold 
            
            tablet:text-[25px]
            text-gray-900 lg:text-lg sm:px-16 xl:px-1
            dark:text-gray-400
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            inline-block
            text-transparent
            bg-clip-text"
            >Fully Immerasive, Decentralized Ecosystem</span>
            <p className=" 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-lg
            "
            >Onboarding assets backend, Web2.0 companies </p>
            <p className="
            mb-3 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-lg
            "
            >and products into Web3.0</p>
            <button  
                className="
                phone:m-auto
                laptop:ml-1
                inline-flex 
                justify-center 
                items-center 
                py-3 
                px-5
                text-base 
                font-medium 
                text-center 
                w-32
                text-white 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900
                rounded
                ">
                Whitepaper
                
            </button> 
            </div>  
            
            <div className='laptop:w-[100%] laptop:h-[100%] hidden tablet:flex  relative z-[5]  '>
            <video autoPlay muted controls>
                <source src="/xara_card.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            </div>   
    </div>
    
            
        <figure className=" phone:w-full  tablet:w-[60vw] flex flex-row bg-[#020117] rounded-xl p-3 mt-5 md:p-0 dark:bg-slate-800 items-center  ml-5">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/market.jpeg" alt="" width="384" height="512" />
                <blockquote>
                <p className="text-lg font-medium text-white">
                    Market Place
                </p>
                </blockquote>
                
                
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/play_to_earn.jpg" alt="" width="384" height="512" />
                <blockquote>
                <p className="text-lg font-medium text-white">
                    Play-To-Earn
                </p>
                </blockquote>
                
                
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/metaverse.png" alt="" width="384" height="512" />
                <blockquote>
                <p className="text-lg font-medium text-white">
                    Metaverse
                </p>
                </blockquote>
                
                
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4 m-auto">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/trade.png" alt="" width="384" height="512" />
                <blockquote>
                <p className="text-lg font-medium text-white">
                    Trade
                </p>
                </blockquote> 
            </div>
            
            </figure> 
        </section>
        

        
    )
}
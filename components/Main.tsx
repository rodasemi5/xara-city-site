import { NFT } from './NFT'

export const Main = (props: any)=> {

    return (
        <div className="container flex flex-col h-[100vh] px-96 py-56 -mt-20 ml-2 justify-start items-start">
            
        <div className="flex flex-1 flex-row items-start  whitespace-nowrap">

            <div className="flex flex-col m-10">
            <h1 className="
            mb-4 
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text"
            >Welcome to
            </h1>
            <h2 className="
            mb-4 
            text-6xl 
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text"
            >Xara City</h2>
            
            <h3 className="
            mb-2
            font-extrabold 
            text-gray-900 lg:text-lg sm:px-16 xl:px-1
            dark:text-gray-400
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text"
            >Fully Immerasive, Decentralized Ecosystem</h3>
            <p className=" 
            font-semibold 
            text-gray-500 
            dark:text-gray-400
            text-lg
            "
            >Onboarding assets backend. Web2.0 companies</p>
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
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 f
                ocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900
                rounded
                ">
                Whitepaper
                
            </button> 
            </div>  
            
            <div className='ml-52 w-[700px] -mt-32'>
            <video autoPlay muted controls>
                <source src="/xara_card.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            </div>   
    </div>
    
            
        <figure className="md:flex bg-[#020117] rounded-xl p-8 mt-5 md:p-0 dark:bg-slate-800 items-center w-[60vw] flex flex-row ml-5">
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
        </div>
        

        
    )
}
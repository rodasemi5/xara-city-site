

export const Main = (props: any)=> {

    return (
        <div className="flex flex-col w-[100vw] h-[100vh] p-20 mt-10 mr-20 justify-start items-start">
            <h1 className="
            mb-4 
            text-xl 
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
            text-4xl 
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
    text-white 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 f
    ocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900
    rounded
    ">
    Whitepaper
    
</button> 

<div className=" ml-10">
    <video autoPlay muted controls>
      <source src="/xara_card.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    </div>    


        </div>
    )
}
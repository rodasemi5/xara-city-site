import { Dropdown } from "flowbite-react"

export const NFT = (props: any ) => {


    return (
        <div className="container flex flex-col w-[60vw]   justify-start items-center ">
            <h1 className="
            m-10 
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
            
            ">Upcoming NFT Mint</h1>

    <div className=" w-full h-[700px] flex flex-row bg-[#030116] rounded-lg ml-10 items-center">
        <img className=" h-96 md:w-48 md:h-auto md:rounded-none ml-10 -mt-16  mx-auto" src="/mint_preview.png" alt="" width="384" height="512" />
        
        <div className="flex flex-col">
        <h1 className="
            m-10 
            text-6xl
            font-thin
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
            
            ">Xarian Citizens</h1>
        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">The Xarian NFTs are made up of 10,000 avatars, each belong to 1 of 5 tribes (DAO's)</p>
                
        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">Earn up to 92 XARA per month through staking</p>

        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white         
                inline-block
                bg-clip-text
                
                ">Collect XARA City Land Site and Building NFTs to become the Head Council (DAO) and earn additional XARA</p>

        <div className="flex flex-col">
        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                
                ">Mint Date: 7 Dec 2022</p>

        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white              
                inline-block
                bg-clip-text
                
                ">Whitelist Mint Price: 0.07 ETH</p>

        <p className="
                m-10 
                -mt-2
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white  
                inline-block
                bg-clip-text
                
                ">Public Mint Price: 0.08 ETH</p>

        <div className="flex flex-row gap-10">

        <p className="
                m-10 
                mt-5
                text-xl
                font-thin
                tracking-tight 
                leading-none 
                text-white md:text-5xl lg:text-6xl 
                dark:text-white      
                inline-block
                bg-clip-text
                ">Whitelist mint - coming soon</p>
                <button className = "w-40 text-white border-3 text-2xl font-bold  h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Mint</button>

        </div>
        
        </div>
        
        </div>
        
    </div>
        
        <h1 className="
            m-10 
            text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
            
            ">P2E - NFT collections</h1>
            <p className="
            m-10 
            -mt-2
            text-2xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-white md:text-5xl lg:text-6xl 
            dark:text-white 
            
            inline-block
            text-transparent
            bg-clip-text
            
            ">Become a Metaverse Property Tycoon and earn XARA token as rent through staking</p>

        <div className=" flex flex-row sm:flex-col">
                <div className="w-[450px] h-[800px]  bg-[#030116] rounded-lg ml-10 items-center justify-between">
                        <img className=" h-96 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto" src="/alpha_card.jpg" alt="" width="384" height="512" />
                        <p className=" flex flex-col m-10">
                                <span className="text-white font-bold text-[32px] mb-5">Land Site NFTs</span>
                                <span className="text-white text-lg">Earn 60 XARA per month through staking</span>
                                
                        </p>

                        <div className="flex flex-col m-10">
                                <p>
                                        <span className="text-white font-normal text-xl mr-48">ETH Price:</span>
                                        <span className="text-white text-xl">0.20 ETH</span>
                                        
                                </p>

                                <p>
                                <span className="text-white font-normal text-xl mr-44">XARA Price:</span>
                                        <span className="text-white text-xl">250 XARA</span>
                                </p>

                        </div>

                        <div className="flex flex-row m-10 justify-between text-xl items-center">

                                <Dropdown label="Currency">
                                        <Dropdown.Item>
                                        Ethereum
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                        $XARA
                                        </Dropdown.Item>
                                        
                                </Dropdown>

                                <button className = "w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Buy</button>


                        </div>
                        

                </div>
                
                <div className=" w-[450px] h-[800px]  bg-[#030116] rounded-lg ml-10 items-center">
                        <img className=" h-96 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto" src="/house.png" alt="" width="384" height="512" />
                        <p className=" flex flex-col m-10">
                                <span className="text-white font-bold text-[32px] mb-5">Building NFTs</span>
                                <span className="text-white text-lg">Earn 80 XARA per month through staking</span>
                                
                        </p>

                        <div className="flex flex-col m-10">
                                <p>
                                        <span className="text-white font-normal text-xl mr-48">ETH Price:</span>
                                        <span className="text-white text-xl">0.25 ETH</span>
                                        
                                </p>

                                <p>
                                <span className="text-white font-normal text-xl mr-44">XARA Price:</span>
                                        <span className="text-white text-xl">300 XARA</span>
                                </p>

                        </div>

                        <div className="flex flex-row m-10 justify-between text-xl items-center">

                                <Dropdown label="Currency">
                                        <Dropdown.Item>
                                        Ethereum
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                        $XARA
                                        </Dropdown.Item>
                                        
                                </Dropdown>

                <button className = "w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Buy</button>


</div>
                </div>
        
                <div className=" w-[450px] h-[800px]  bg-[#030116] rounded-lg ml-10 items-center">
                        <img className=" h-96 md:w-48 md:h-auto md:rounded-none mt-5 rounded  mx-auto" src="/alpha_card.jpg" alt="" width="384" height="512" />
                        <p className=" flex flex-col m-10">
                                <span className="text-white font-bold text-[32px] mb-5">Land & Building NFTs</span>
                                <span className="text-white text-lg">Earn 185 XARA per month through staking</span>
                                
                        </p>

                        <div className="flex flex-col m-10">
                                <p>
                                        <span className="text-white font-normal text-xl mr-48">ETH Price:</span>
                                        <span className="text-white text-xl">0.40 ETH</span>
                                        
                                </p>

                                <p>
                                <span className="text-white font-normal text-xl mr-44">XARA Price:</span>
                                        <span className="text-white text-xl">500 XARA</span>
                                </p>

                        </div>

                        <div className="flex flex-row m-10 justify-between text-xl items-center ">

                        <Dropdown label="Currency">
                                <Dropdown.Item>
                                Ethereum
                                </Dropdown.Item>
                                <Dropdown.Item>
                                $XARA
                                </Dropdown.Item>
                                
                        </Dropdown>

                        <button className = "w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Buy</button>
		
                        
                        </div>
                </div>
                
        </div>    
        <p className="text-white m-10 text-xl">Purchase a Land Site and Building Combo for a 10% discount and earn 25% more XARA from staking</p>
        <img src="/blockchains.png" className="m-32"/>


        </div>
    )
}
import { Footer } from 'flowbite-react'

export const FooterMain = () => {
  return (

    <section id="footer" className=" w-[100vw]  flex tablet:flex-col flex-col sm:py-6 justify-center items-center ">
    <Footer container={true} className="bg-black">
  <div className="w-full text-center">
    <div className=" w-full justify-between flex flex-col sm:flex sm:justify-between laptop:flex lapyop:grid-cols-1">
      <div className='m-10'>
        <img
        className=' w-52'
          // href=""
          src="/xara_logo.png"
          alt="Xara Logo"
          // name="Xara"
        />
        <p className='text-white text-start mt-2 pl-4'>Xaraverse@gmail.com</p>
      </div>
      <div className="grid grid-cols-3  sm:mt-4 sm:grid-cols-3 sm:gap-6 items-center">
        <div className='ml-auto'>
          <Footer.Title title="Info" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Home
            </Footer.Link>
            <Footer.Link href="#">
              Ecosystem
            </Footer.Link>
            <Footer.Link href="#">
              FAQ
            </Footer.Link>
            <Footer.Link href="#">
              Team
            </Footer.Link>
            <Footer.Link href="#">
              Gitbook
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Buy" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Market Place
            </Footer.Link>
            <Footer.Link href="#">
              Minting
            </Footer.Link>
            <Footer.Link href="#">
              Collection
            </Footer.Link>
            <Footer.Link href="#">
              Xaraverse
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        
        <div className='mr-auto'>
          <Footer.Title title="Follow Us" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Discord
            </Footer.Link>
            <Footer.Link href="#">
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              Telegram
            </Footer.Link>
          </Footer.LinkGroup>
          
        </div>
        
        
      </div>
    </div>
    
    <Footer.Divider />
    <div className="w-full flex flex-row justify-center text-center laptop:gap-10">
      <p className='text-white indent-2 text-sm laptop:text-xl'> Xara City 2022 </p>
      <p className='text-white indent-2 text-sm laptop:text-xl'>   Policy </p>
      <p className='text-white indent-2 text-sm laptop:text-xl'>   Terms  & Conditions</p>
      <p className='text-white indent-2 text-sm laptop:text-xl'>  Disclaimer </p>
      
    </div>
  </div>
</Footer>

    </section>
    
  )
}


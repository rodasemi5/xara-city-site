import { Footer } from 'flowbite-react'

export const FooterMain = () => {
  return (

    <section id="footer" className=" w-[100vw]  flex laptop:flex-col flex-col sm:py-16  justify-center items-center ">
    <Footer container={true} className="bg-black">
  <div className="w-full text-center">
    <div className=" w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div className='p-10'>
        <Footer.Brand
          href=""
          src="/xara_logo.png"
          alt="Xara Logo"
          name="Xara"
        />
        <p className='text-white text-start'>Xaraverse@gmail.com</p>
      </div>
      <div className="grid grid-cols-3 gap-1 justify sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
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
        <div>
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
    <div className="w-full flex flex-row justify-center text-center sm:flex sm:items-center sm:justify-between">
      <p className='text-white indent-2'> Xara City 2022 </p>
      <p className='text-white indent-2'>  | Policy </p>
      <p className='text-white indent-2'>  | Terms  & Conditions</p>
      <p className='text-white indent-2'>  | Disclaimer </p>
      
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      
      </div>
    </div>
  </div>
</Footer>

    </section>
    
  )
}


import { Footer } from "flowbite-react";

export const FooterMain = () => {
  return (
    <section
      id="footer"
      className=" w-full justify-center items-center relative"
    >
      <Footer container={true} className="bg-gradient-radial p-10 pt-32">
        <div className="w-full text-center">
          <div className=" w-[90vw] m-auto flex flex-col grid grid-cols-1 tablet:grid-cols-2">
            <div className="m-10 tablet:m-auto tablet:items-center tablet:justify-ceter">
              <img
                className="m-auto tablet-m-unset w-52"
                // href=""
                src="/xara_logo.png"
                alt="Xara Logo"
                // name="Xara"
              />
              <p className="text-gray-400 text-center tablet:text-start mt-2 pl-4 ml-16 m-auto tablet-m-unset">
                Xaraverse@gmail.com
              </p>
            </div>
            <div className="ml-auto mb-10 tablet:mb-0 tablet:mt-20 m-auto tablet:right-0 relative">
              <span className="flex flex-row">
                <Footer.Title
                  title="REVIEWED ON"
                  className="text-[#4258CF] normal-case mr-5"
                />
                <img alt="" src="/star.png" className="h-5 w-5" />
                <img alt="" src="/star.png" className="h-5 w-5" />
                <img alt="" src="/star.png" className="h-5 w-5" />
                <img alt="" src="/star.png" className="h-5 w-5" />
                <img alt="" src="/star.png" className="h-5 w-5" />
              </span>
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="ml-auto right-32 -mt-4">
                  135 Reviews
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="ml-auto">
              <Footer.Title
                title="Info"
                className="text-[#4258CF] normal-case mt-8"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Ecosystem</Footer.Link>
                <Footer.Link href="#">FAQ</Footer.Link>
                <Footer.Link href="#">Team</Footer.Link>
                <Footer.Link href="#">Gitbook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Buy"
                className="text-[#4258CF] normal-case"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Market Place</Footer.Link>
                <Footer.Link href="#">Minting</Footer.Link>
                <Footer.Link href="#">Collection</Footer.Link>
                <Footer.Link href="#">Xaraverse</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="mr-auto">
              <Footer.Title
                title="Follow Us"
                className="text-[#4258CF] normal-case"
              />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Telegram</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="navbar-line mt-10 mb-8 mx-auto" />
          <div className="w-[98vw] m-auto flex flex-col laptop:flex-row justify-center text-center">
            <p className="text-gray-400 tracking-wider indent-2">
              {" "}
              Xara City 2022{" "}
            </p>
            <p className="text-gray-400 tracking-wider indent-8"> Policy </p>
            <p className="text-gray-400 tracking-wider indent-8">
              {" "}
              Terms & Conditions
            </p>
            <p className="text-gray-400 tracking-wider indent-8">
              {" "}
              Disclaimer{" "}
            </p>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
          </div>
        </div>
      </Footer>
    </section>
  );
};

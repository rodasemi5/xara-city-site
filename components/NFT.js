import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "flowbite-react";
import Countdown from "react-countdown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ethers } from "ethers";
import { xarianAbi, xarianAddress,marketBLAbi,marketBLAddress } from "../src/constants/Xarian";
import toast, { Toaster } from "react-hot-toast";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return "Mint is Live!";
  } else {
    // Render a countdown
    return (
      <span>
        {days}d : {hours}h : {minutes}m : {seconds}s
      </span>
    );
  }
};

const buyXarianWL = async (amount) => {
  console.log("in connect");
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const xarianContract = new ethers.Contract(
        xarianAddress,
        xarianAbi,
        provider
      );
      const xarianWithSigner = xarianContract.connect(signer);
      const eth = Math.floor(amount * 6);
      const options = { value: eth.toString() + "0000000000000000" };
      const tx = await xarianWithSigner.mint(amount, options);
      toast(
        <div>
          Track transaction:{" "}
          <a href={"https://etherscan.io/tx/" + tx.hash} target="_blank">
            Click here!
          </a>{" "}
        </div>,{
        duration: 20000}
      );
    }
  } catch (e) {
    console.log(e);
    if(e.reason){
      toast.error(e.reason,{
        duration: 20000});
    }else{
      toast.error("Something went wrong!",{
        duration: 20000});
    }
  }
};

const buyBuilding = async (amount) => {
  console.log("buyBuilding", amount);
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const xarianContract = new ethers.Contract(
        marketBLAddress,
        marketBLAbi,
        provider
      );
      const xarianWithSigner = xarianContract.connect(signer);
      const eth = Math.floor(amount * 25);
      const options = { value: eth.toString() + "0000000000000000" };
      const tx = await xarianWithSigner.mintCitywEth(amount, options);
      toast(
        <div>
          Track transaction:{" "}
          <a href={"https://etherscan.io/tx/" + tx.hash} target="_blank">
            Click here!
          </a>{" "}
        </div>,{
        duration: 20000}
      );
    }
  } catch (e) {
    console.log(e);
    if(e.reason){
      toast.error(e.reason,{
        duration: 20000});
    }else{
      toast.error("Something went wrong!",{
        duration: 20000});
    }
  }
};

const buyLand = async (amount) => {
  console.log("buyLand", amount);
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const xarianContract = new ethers.Contract(
        marketBLAddress,
        marketBLAbi,
        provider
      );
      const xarianWithSigner = xarianContract.connect(signer);
      const eth = Math.floor(amount * 2);
      const options = { value: eth.toString() + "00000000000000000" };
      console.log("options",options)
      const tx = await xarianWithSigner.mintLandwEth(amount, options);
      toast(
        <div>
          Track transaction:{" "}
          <a href={"https://etherscan.io/tx/" + tx.hash} target="_blank">
            Click here!
          </a>{" "}
        </div>,{
        duration: 20000}
      );
    }
  } catch (e) {
    console.log(e);
    if(e.reason){
      toast.error(e.reason,{
        duration: 20000});
    }else{
      toast.error("Something went wrong!",{
        duration: 20000});
    }
  }
};

const buyCombo = async (amount) => {
  console.log("buyCombo", amount);
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const xarianContract = new ethers.Contract(
        marketBLAddress,
        marketBLAbi,
        provider
      );
      const xarianWithSigner = xarianContract.connect(signer);
      const eth = Math.floor(amount * 4);
      const options = { value: eth.toString() + "00000000000000000" };
      const tx = await xarianWithSigner.mintPairwEth(amount, options);
      toast(
        <div>
          Track transaction:{" "}
          <a href={"https://etherscan.io/tx/" + tx.hash} target="_blank">
            Click here!
          </a>{" "}
        </div>,{
        duration: 20000}
      );
    }
  } catch (e) {
    console.log(e);
    if(e.reason){
      toast.error(e.reason,{
        duration: 20000});
    }else{
      toast.error("Something went wrong!",{
        duration: 20000});
    }
  }
};

export const NFT = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const [xarianAmount, setxarianAmout] = useState(1);
  const [buildAmount, setbuildAmount] = useState(1);
  const [landAmount, setlandAmount] = useState(1);
  const [comboAmount, setcomboAmount] = useState(1);

  const xarianReady = true;
  const comboReady = true;

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const handleChange1 = (event) => {
    let result = Number(event.target.value.replace(/\D/g, ""));
    if(result > 10){
      result = 10;
    }
    setxarianAmout(result);
  };

  const handleChange2 = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setlandAmount(Number(result));
  };

  const handleChange3 = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setbuildAmount(Number(result));
  };

  const handleChange4 = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setcomboAmount(Number(result));
  };

  return (
    <div className="w-full  bg-[#0A091B] items-center -mt-4 flex flex-col ">
      <div id="collection" className="container w-[98vw] flex flex-col  justify-start items-center ">
        <h1
          className="
            -mb-4
            text-4xl
            laptop:text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
          p-24
            
            "
        >
          Upcoming NFT Mint
        </h1>

        <div className="w-4/5 tablet:w-[700px] laptop:w-4/5 h-fit p-4 flex flex-col laptop:flex-row rounded-lg ml-5 mr-5 items-center relative bg-[#030116]">
          <div className="w-[98vw] flex-col rounded-lg ml-5 mr-5 mx-auto">
            <div className="h-82 mx-auto">
              <img
                src="/mint_preview2.png"
                alt=""
                className="h-52 w-60 laptop:w-96 laptop:h-96 laptop:rounded mx-auto shadow-2xl shadow-black"
              />
              <div className="w-60 laptop:h-20 laptop:w-96 text-center text-2xl text-white font-bold p-2 rounded-b-lg  mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Public mint
              <p>
                <Countdown
                  date={new Date("12/5/2022 23:00:00 GMT")}
                  renderer={renderer}
                />
              </p>
            </div>
            </div>
            
          </div>
          <div className="w-[98vw] p-10">
            <div className="flex flex-col text-center laptop:text-start">
              <h1
                className="
            m-4 
            text-2xl
            laptop:text-5xl
            font-semibold
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
            "
              >
                Xarian Citizens
              </h1>
              <p
                className="
                m-6
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                pr-4
                
                "
              >
                The Xarian NFTs are made up of 10,000 avatars, each belong to 1
                of 5 tribes (DAO's)
              </p>

              <p
                className="
                m-6 
                -mt-1
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white 
                inline-block
                bg-clip-text
                pr-4
                
                "
              >
                Earn up to 92 XARA per month through staking
              </p>

              <p
                className="
                m-6
                -mt-1
                text-lg
                font-semibold
                tracking-tight 
                leading-none 
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                dark:text-white         
                inline-block
                bg-clip-text
                pr-4
                "
              >
                Collect XARA City Land Site and Building NFTs to become the Head
                Council (DAO) and earn additional XARA
              </p>

              <div className="flex flex-col">
                <div className="flex flex-row -mt-4 pb-1">
                  <p
                    className="
                m-6 
                mt-6
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                text-left
                "
                  >
                    Mint Date:
                  </p>
                  <p
                    className="mt-6
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                flex-1
                pr-4
                m-6
                text-right"
                  >
                    7 Dec 2022
                  </p>
                </div>
                <div className="flex flex-row pb-1">
                  <p
                    className="
                m-6
                -mt-4
                -mr-2
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl
                
                "
                  >
                    Whitelist Mint Price:
                  </p>
                  <p
                    className="-mt-4
                text-lg
                font-semibold
                pr-4
                m-6
                flex-1
                text-[#7B8B9C] md:text-5xl lg:text-6xl  text-right"
                  >
                    0.05 ETH
                  </p>
                </div>
                <div className="flex flex-row pb-4">
                  <p
                    className="
                m-6 
                -mt-4
                -mr-2
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                bg-clip-text
                
                "
                  >
                    Public Mint Price:
                  </p>
                  <p
                    className="pr-4
                m-6
                flex-1 
                -mt-4
                text-lg
                font-semibold
                text-[#7B8B9C] md:text-5xl lg:text-6xl text-right"
                  >
                    0.06 ETH
                  </p>
                </div>
                <div className="flex flex-row gap-10 mt-6">
                  {xarianReady ? (
                    <div className="flex flex-row w-full">
                      <div className="float-left  -mt-4 w-[40%] mr-0">
                        <p className="m-4 text-[#7B8B9C] pr-4">
                          Select QTY
                          <br />
                          No Maximum
                        </p>
                      </div>
                      <div className="float-center w-[30%] ml-0">
                         <input
                            style={{
                            width:"50px",
                            backgroundColor: "grey",
                            border: "2px solid #fff",
                            textAlign: "left",
                            float: "center",
                          }}
                              type="text"
                              placeholder=""
                              value={xarianAmount}
                              onChange={handleChange1}
                            /> 
                        {/*<Dropdown
                          label=""
                          style={{
                            backgroundColor: "grey",
                            border: "2px solid #fff",
                            textAlign: "left",
                            float: "center",
                          }}
                          value={xarianAmount}
                          onChange={handleChange1}
                        >
                          <Dropdown.Item>1</Dropdown.Item>
                          <Dropdown.Item>2</Dropdown.Item>
                          <Dropdown.Item>3</Dropdown.Item>
                          <Dropdown.Item>4</Dropdown.Item>
                          <Dropdown.Item>5</Dropdown.Item>
                          <Dropdown.Item>6</Dropdown.Item>
                          <Dropdown.Item>7</Dropdown.Item>
                          <Dropdown.Item>8</Dropdown.Item>
                          <Dropdown.Item>9</Dropdown.Item>
                          <Dropdown.Item>10</Dropdown.Item>
                        </Dropdown>*/}
                      </div>
                      <div className="flex flex-row float-right mr-4 pr-4 -mt-2 w-[30%]">
                        <button
                          onClick={(e) => buyXarianWL(xarianAmount)}
                          className=" w-[6rem] laptop:flex-1 text-white border-3 text-2xl font-bold  h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 float-right items-right "
                        >
                          Mint
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p
                        className="
                m-4 
                -mt-1
                -mr-2
                text-lg
                font-semibold
                w-fit
                text-[#7B8B9C] md:text-5xl lg:text-6xl 
                "
                      >
                        COMING SOON!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1
          className="
            m-10 
            pt-20
            text-4xl
            laptop:text-6xl
            font-extrabold 
            tracking-tight 
            leading-none 
            text-gray-900 md:text-5xl lg:text-6xl 
            dark:text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            inline-block
            text-transparent
            bg-clip-text
            text-center
            
            "
        >
          P2E - NFT collections
        </h1>
        <br />
        <p
          className="
            m-10 
            -mt-12
            mb-16
            text-lg
            font-semibold 
            tracking-tight 
            leading-none 
            text-[#7B8B9C]
            dark:text-white 
            
            inline-block
            text-transparent
            bg-clip-text
            text-center
            "
        >
          Become a Metaverse Property Tycoon and earn XARA token as rent through
          staking
        </p>
      </div>
      <div className="w-[98vw] m-auto flex flex-col laptop:flex-row justify-center">
        <div className="w-[96vw] m-auto max-w-[450px] laptop:w-[30%] h-fit laptop:m-[1.6%]  bg-[#1E0F2F] rounded-lg items-center justify-between mb-10 laptop:mb-0">
          <div className="w-4/5 m-5 rounded  mx-auto ">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              <div>
                <img alt="" src="/landsite1.png" />
              </div>
              <div>
                <img alt="" src="/landsite2.png" />
              </div>
              <div>
                <img alt="" src="/landsite3.png" />
              </div>
              <div>
                <img alt="" src="/landsite4.png" />
              </div>
            </Slider>
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land Site NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 60 XARA per month through staking
            </span>
          </p>
          {comboReady ? (
            <div>
              <div className="flex flex-col m-10 -mt-4 -mb-4">
                <p>
                  <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                    ETH Price:
                  </span>
                  <span className="text-[#7B8B9C] text-lg">0.20 ETH</span>
                </p>
              </div>

              <div className="flex flex-row m-10 justify-between text-lg items-center">
                <Dropdown
                  label="Ethereum"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #8840C4",
                  }}
                >
                  <Dropdown.Item>Ethereum</Dropdown.Item>
                </Dropdown>
                <input
                                            style={{
                                              width:"50px",
                                              backgroundColor: "grey",
                                              border: "2px solid #fff",
                                              textAlign: "left",
                                              float: "center",
                                            }}
                  type="text"
                  placeholder=""
                  value={landAmount}
                  onChange={handleChange2}
                />

                <button
                  onClick={(e) => buyLand(landAmount)}
                  className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"                  >
                  Buy
                </button>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <p className=" flex flex-col m-10">
                <span className="text-[#7B8B9C] text-lg">COMING SOON!</span>
              </p>
            </div>
          )}
        </div>

        <div className=" w-[96vw] m-auto max-w-[450px] laptop:w-[30%] h-fit laptop:m-[1.6%]  bg-[#1E0F2F] rounded-lg items-center  mb-10 laptop:mb-0">
          <div className="w-4/5 m-5 rounded  mx-auto">
            <Slider
              asNavFor={nav3}
              ref={(slider2) => {
                setNav2(slider2);
              }}
              {...settings}
            >
              <div>
                <img alt="" src="/b1.png" />
              </div>
              <div>
                <img alt="" src="/b2.png" />
              </div>
              <div>
                <img alt="" src="/b3.png" />
              </div>
              <div>
                <img alt="" src="/b4.png" />
              </div>
              <div>
                <img alt="" src="/b5.png" />
              </div>
              <div>
                <img alt="" src="/b6.png" />
              </div>
            </Slider>
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Building NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 80 XARA per month through staking
            </span>
          </p>
          {comboReady ? (
            <div>
              <div className="flex flex-col m-10 -mt-4 -mb-4">
                <p>
                  <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                    ETH Price:
                  </span>
                  <span className="text-[#7B8B9C] text-lg">0.25 ETH</span>
                </p>
              </div>
              <div className="flex flex-row m-10 justify-between text-lg items-center">
                <Dropdown
                  label="Ethereum"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #8840C4",
                  }}
                >
                  <Dropdown.Item>Ethereum</Dropdown.Item>
                </Dropdown>

                <input
                style={{
                  width:"50px",
                  backgroundColor: "grey",
                  border: "2px solid #fff",
                  textAlign: "left",
                  float: "center",
                }}
                  type="text"
                  placeholder=""
                  value={buildAmount}
                  onChange={handleChange3}
                />

                <button
                  onClick={(e) => buyBuilding(buildAmount)}
                  className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"                  >
                  Buy
                </button>
              </div>{" "}
            </div>
          ) : (
            <div>
              {" "}
              <p className=" flex flex-col m-10">
                <span className="text-[#7B8B9C] text-lg">COMING SOON!</span>
              </p>
            </div>
          )}
        </div>

        <div className="w-[96vw] m-auto max-w-[450px] laptop:w-[30%] h-fit laptop:m-[1.6%] bg-[#1E0F2F] rounded-lg items-center">
          <div className="w-4/5 = m-5 rounded  mx-auto">
            <Slider
              asNavFor={nav1}
              ref={(slider3) => setNav3(slider3)}
              {...settings}
            >
              <div>
                <img alt="" src="/b1.png" />
              </div>
              <div>
                <img alt="" src="/landsite1.png" />
              </div>
              <div>
                <img alt="" src="/b2.png" />
              </div>
              <div>
                <img alt="" src="/landsite2.png" />
              </div>
              <div>
                <img alt="" src="/b3.png" />
              </div>
              <div>
                <img alt="" src="/landsite3.png" />
              </div>
              <div>
                <img alt="" src="/b4.png" />
              </div>
              <div>
                <img alt="" src="/landsite4.png" />
              </div>
              <div>
                <img alt="" src="/b5.png" />
              </div>
              <div>
                <img alt="" src="/b6.png" />
              </div>
            </Slider>
          </div>
          <p className=" flex flex-col m-10">
            <span className="text-white font-bold text-[32px] mb-2">
              Land & Building NFTs
            </span>
            <span className="text-[#7B8B9C] text-lg">
              Earn 185 XARA per month through staking
            </span>
          </p>
          {comboReady ? (
            <div>
              <div className="flex flex-col m-10 -mt-4 -mb-4">
                <p>
                  <span className="text-[#7B8B9C] font-normal text-lg mr-48">
                    ETH Price:
                  </span>
                  <span className="text-[#7B8B9C] text-lg">0.40 ETH</span>
                </p>
              </div>

              <div className="flex flex-row m-10 justify-between text-lg items-center ">
                <Dropdown
                  label="Ethereum"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #8840C4",
                  }}
                >
                  <Dropdown.Item>Ethereum</Dropdown.Item>
                </Dropdown>

                <input
                style={{
                  width:"50px",
                  backgroundColor: "grey",
                  border: "2px solid #fff",
                  textAlign: "left",
                  float: "center",
                }}
                  type="text"
                  placeholder=""
                  value={comboAmount}
                  onChange={handleChange4}
                />

                <button
                  onClick={(e) => buyCombo(comboAmount)}
                  className="w-32 text-white border-3 font-bold py-2 px-4 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"                 >
                  Buy
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className=" flex flex-col m-10">
                <span className="text-[#7B8B9C] text-lg">COMING SOON!</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-[#7B8B9C] m-10 text-xl text-center  mb-10 laptop:mb-0 w-[98vw] ">
        Purchase a Land Site and Building Combo for a 10% discount and earn 25%
        more XARA from staking
      </p>
      <div className="flex flex-col laptop:flex-row mb-10 pb-32 pt-20 laptop:pt-32">
        <img
          src="/eth.svg"
          style={{ color: "grey" }}
          className="h-16 mt-14 m-10 -mb-10"
        />
        <img
          src="/binance.svg"
          style={{ color: "white" }}
          className="h-48 m-10 -mb-10 -mt-1"
        />
        <img
          src="/openSea.svg"
          style={{ color: "grey" }}
          className="h-12 laptop:m-10 -mb-10 laptop:mt-16"
        />
      </div>
    </div>
  );
};

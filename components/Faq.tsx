import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      style={{
        backgroundColor: "#0B091A",
        paddingTop: "5rem",
        paddingBottom: "18vh",
      }}
      className="flex flex-col items-center  m-auto"
      id="faq"
    >
      <h1
        style={{ paddingBottom: "8vh" }}
        className="
            flex-1
            ss:text-[72px]
            ss:leading-[100px]
            text-4xl
            laptop:text-6xl
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
            text-center
            "
      >
        FAQ's
      </h1>
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            className={
              expanded === "panel1"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
          >
            What are the different NFTs generated by Xara City?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="mb-2 text-white font-bold">* Land Site NFTs</p>
          <p className="text-white">
            12,000 of which 6,000 are reserved for the P2E Game, <br></br> 3,000
            for Xara City Founders to build Virtual Experiences in the Xaraverse{" "}
            <br></br> and 3,000 reserved for corporate sales to companies
            requiring VR Experiences.
          </p>

          <p className="mb-2 text-white font-bold mt-4">* Building NFTs</p>
          <p className="text-white">
            6,000 building NFTs made up of 6 zones which each represent{" "}
            <br></br> a pre-defined number of units, which are written into the
            metadata and <br></br> carried over to Key NFTs and VR NFTs.
          </p>
          <ul className="p-4">
            <li className="text-white m-4">??? Skyscraper ??? 100 units/keys</li>
            <li className="text-white m-4">??? High Rise ??? 75 units/keys</li>
            <li className="text-white m-4">??? Low Rise ??? 50 units/keys</li>
            <li className="text-white m-4">
              ??? High Density Residential ??? 100 units/keys
            </li>
            <li className="text-white m-4">
              ??? Costal Residential ??? 75 units/keys
            </li>
            <li className="text-white m-4">
              ??? Ultra Spacious Home ??? 1 unit/key
            </li>
          </ul>

          <p className="mb-2 text-white font-bold">* 3D Key NFTs</p>
          <p className="text-white mb-2">
            Key NFTs are generated in-game. Save up $Xara earned from staking or
            purchase <br></br> $Xara via the Xara City Exchange to fractionalize
            a Land Site and Building NFT into Keys.
            <br></br>Land Site and Building are burnt (removed from the market)
            after they are fractionalized, <br></br> which increases rarity of
            the Land Site and Building NFTs.
          </p>
          <p className="text-white mb-2">
            Example Land Site No# 25 + Skyscraper No# 15 are Fractionalized into
            100 Key NFTs which can be sold individually or <br></br> upgraded
            individually to VR NFTs with Virtual Apartment.
            <br></br> The Metadata for key number 1 of the 100 keys in this
            example will read as follows ??? LS25SS25K1.
          </p>
          <p className="text-white mb-2">
            Fractionalization has a once off cost and is done via the Staking
            platform in the Xara City Dashboard.
          </p>

          <p className="mb-2 text-white font-bold mt-4">* VR NFTs</p>
          <p className="text-white mb-2">
            Use $Xara earned from staking or purchase $Xara via the Xara City
            Exchange to upgrade Individual Key NFTs
          </p>
          <p className="text-white mb-2">
            (Example LS25SS25K1) to VR NFTs with Virtual apartments. Each VR NFT
            acts as your access pass into your Virtual apartment.
            <br></br>There are 4 Apartment Types and 2 Home Types for each
            Zoning Type (Skyscraper, High Rise etc):
          </p>
          <ul className="p-4">
            <li className="text-white m-4">??? Junior Suite</li>
            <li className="text-white m-4">??? Deluxe Suite</li>
            <li className="text-white m-4">??? Executive Suite</li>
            <li className="text-white m-4">??? Presidential Suite</li>
            <li className="text-white m-4">??? Luxury Home</li>
            <li className="text-white m-4">??? Executive Home</li>
          </ul>

          <p className="text-white mb-2">
            Once you own a Xara City VR NFT and Virtual Apartment you can rent
            it out via the Xara City Exchange to <br></br> earn additional $Xara
            Income.
          </p>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
        // style={{ color: "red", width: "60%", margin: "auto" }}
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel2"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            What is the Mint Strategy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Due to market Conditions and to protect the longevity of the
              Ecosystem Xara City NFTs will be minted in stages, starting with{" "}
              <br></br> 1,500 pre-sold NFTs sets to VIP investors, followed by
              2,000 White List NFTs and lastly <br></br>Public Mint if there are
              any NFTs left over.
            </p>

            <ul className="p-4">
              <li className="text-white m-4">
                ??? Land Site NFTs staked alone = 60 $Xara per month
              </li>
              <li className="text-white m-4">
                ??? Building NFTs staked alone = 80 $Xara per month
              </li>
              <li className="text-white m-4">
                ??? Combined Land and Building NFT???s staked together = 185 $Xara
                per month
              </li>
              <li className="text-white m-4">
                ??? Key NFTs staked alone = 250 $Xara per month (divided by the
                number of Key NFTs)
              </li>
              <li className="text-white m-4">
                ??? VR NFTs staked alone = 315 $Xara per month (divided by the
                number of VR NFTs)
              </li>
            </ul>
            <p className="mb-2 text-white">
              * The Team???s Portion of NFTs included in the VIP mint will be
              taken through the Ecosystem <br></br> to reassure participants
              that the Ecosystem is fully operational i.e. Staking, $Xara
              Staking Rewards paid out,
              <br></br>Fractionalization into Key NFTs and Upgrades to VR NFTs
              and Apartments
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel3"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            How does staking an NFT work & how do I earn $XARA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              * Head over to the Xara City Dashboard and click on P2E Staking to
              get started.
            </p>
            <p className="mb-2 text-white">
              * Next connect your wallet and the system will automatically
              populate the staking platform with all your Xara City NFTs.
            </p>
            <p className="mb-2 text-white">
              * Select the NFTs you would like to stake and the duration i.e
              day/week/month. The system will automatically <br></br> calculate
              your Staking Earn in $Xara for the duration.
            </p>
            <p className="mb-2 text-white">
              * Once staking duration has ended click on the cash out button to
              send the $Xara earned to your Ethereum based wallet.
            </p>
            <p className="mb-2 text-white">
              * Staking NFTs earns $Xara as follows:
            </p>
            <ul className="p-4">
              <li className="text-white m-4">
                ??? Land Site NFTs staked alone = 60 $Xara per month
              </li>
              <li className="text-white m-4">
                ??? Building NFTs staked alone = 80 $Xara per month
              </li>
              <li className="text-white m-4">
                ??? Combined Land and Building NFT???s staked together = 185 $Xara
                per month
              </li>
              <li className="text-white m-4">
                ??? Key NFTs staked alone = 250 $Xara per month (divided by the
                number of Key NFTs)
              </li>
              <li className="text-white m-4">
                ??? VR NFTs staked alone = 315 $Xara per month (divided by the
                number of VR NFTs)
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel4"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            How does the Play-To-Earn Property Developement Blockchain Game
            work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-white mb-2">
              Much like a real world property development cycle the Play-To-Earn
              Game <br></br> allows participants to build up a property
              portfolio to eventually <br></br> rent out for additional $Xara
              rental income via the Xara City Market Place.
              <br></br>The process is as follows: acquire land, then a building,
              then section into apartments, then sell or rent out. <br></br> See
              FAQ no# 1 for details on Zoning, Keys and VR Upgrades.
            </p>
            <ul className="p-4">
              <li className="text-white m-4">
                ??? Step 1 ??? First acquire a Land Site NFT and then a Building NFT
              </li>
              <li className="text-white m-4">
                ??? Step 2 ??? Stake your Land Site and Building NFT to earn $Xara
                as a staking reward
              </li>
              <li className="text-white m-4">
                ??? Step 3 ??? Use $Xara earned from staking OR convert USDC to{" "}
                <br></br> $Xara and pay a once off set fee to fractionalize a
                Land Site and Building <br></br> set into 1, 50, 75 or 100 keys
                to sell individually or upgrade to VR NFTs
              </li>
              <li className="text-white m-4">
                ??? Step 4 ??? Next, upgrade your individual keys to VR NFTs with
                Virtual apartments to sell or rent out
              </li>
            </ul>
            <p className="text-white mb-2">
              All Xara City NFTs earn $Xara as a staking reward when staked
              which increases from <br></br> Land Sites, to Buildings, to
              combinations, to Keys and to VR NFTs ??? see FAQ no# 3 above for
              staking rewards.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel5"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            What does the Xaraverse offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              The Xaraverse is an always-on digital environment where visitors
              can shop, socialise, train for their jobs, <br></br> play games,
              take classes, attend meetings, have cultural experiences and more???
            </p>
            <p className="mb-2 text-white">
              The Xaraverse is a Hyper-realistic digital world with fully
              Immersive <br></br> 3D Virtual Experiences, coupled with a fully
              functioning shared economy.
            </p>
            <p className="mb-2 text-white">
              The Xaraverse is poised to radically change how we work, play and
              connect.
            </p>
            <p className="mb-2 text-white">
              Spend $Xara in-game on VR Experiences such as Casinos, Theme
              Parks, <br></br> Retail Shopping, Games, Education Learning,
              Entertainment, Events, Socializing and more???
            </p>
            <p className="mb-2 text-white">
              It is free to enter and experience the Xaraverse, however, much
              like a rewards and incentive program,
              <br></br>Xara City NFT holders will benefit from exclusive access
              into a variety of different experiences <br></br> which would
              normally have an associated cost payable in $Xara for non-NFT
              holders.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel6"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            How do I get access to the Xaraverse?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Download the Xara City Desktop App to your PC or MAC. <br></br>{" "}
              Click here to go to the Xaraverse download page or <br></br> here
              to enter the Xaraverse Demo.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel7"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            What does the Xara City Market Place offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Flowbite is an open-source library of interactive components{" "}
              <br></br> built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <ul className="p-4">
              <li className="text-white m-4">??? Bid on NFT Auctions</li>
              <li className="text-white m-4">??? Purchase NFTs</li>
              <li className="text-white m-4">
                ??? Rent Virtual Apartments <br></br> set into 1, 50, 75 or 100
                keys to sell individually or upgrade to VR NFTs
              </li>
              <li className="text-white m-4">
                ??? Mint Event and Raffle Tickets
              </li>
              <li className="text-white m-4">
                ??? Acquire rare 1 of 1 NFTs and Tokenized Asset NFTs.
              </li>
            </ul>
            <p className="mb-2 text-white">
              The Xara City Market Place is a holistic dashboard linked to the{" "}
              <br></br>P2E staking platform and Xara City Exchange <br></br>
              which facilitates NFT Sales & rental, a <br></br>Play-To-Earn
              $Xara Staking Rewards system, as well as Swapping and <br></br>{" "}
              Trading of Ethereum based Crypto currencies for<br></br> $Xara to
              spend in-game and in the Xaraverse on VR experiences.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel7"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            How can I rent out a Virtual Apartment to earn additional $XARA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Virtual Apartments are fully immersive and interactive ??? view a
              demo here.
            </p>
            <p className="mb-2 text-white">
              Once a Land Site and Building NFT have been fractionalized to Keys
              and a Key has then been <br></br> Upgraded to a VR NFT with a
              Virtual Apartment, then the Xara City Staking Platform can be{" "}
              <br></br>used to set up your rental to be listed on the Xara City
              Market Place.
            </p>
            <p className="mb-2 text-white">
              To create a rental you will need to set your minimum rental
              duration, maximum rental duration and minimum rental price.
              <br></br>For example, you may choose to set your minimum rental
              duration to 30 days and the maximum to 90 days at a minimum rental
              price of 100 $Xara.
            </p>
            <p className="mb-2 text-white">
              This means anyone can then rent your apartment for between 30 to
              90 days at <br></br> a minimum price of 100 $Xara per 30 days.
            </p>
            <p className="mb-2 text-white">
              A potential tenant will search for Apartment rentals on the Xara
              City Market Place and select and Apartment.
              <br></br>Next the tenant selects the rental duration they would
              like to rent for and must then connect their wallet and <br></br>{" "}
              pay for the entire rental duration upfront. Renting an Apartment
              in the Xaraverse affords the tenant additional access benefits
              such as <br></br> 2 free entrances into the Theme Park or any
              other Xara City VR experience for the rental duration.
            </p>
            <p className="mb-2 text-white">
              Once a Tenant has paid for the rental they will receive a
              temporary access pass<br></br> NFT which will be used to enter the
              apartment at their leisure. As the Owner of the apartment, you
              will not be able to access the Apartment during he <br></br>{" "}
              rental duration which the tenant has paid for which ensures
              privacy for the tenant.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel7"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            How can I Swap/Trade Ethereum based Crypto for XARA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Head over to the Xara City Exchange and connect your Ethereum
              based Wallet to facilitate Swapping of any <br></br> Ethereum
              Based Cryptocurrency to $Xara or visa versa to then spend in the{" "}
              <br></br>Xara City Market Place on NFTs or Xaraverse on VR
              Experiences.
            </p>
            <p className="mb-2 text-white">
              The Xara City Exchange offers the following functionality:
            </p>
            <ul className="p-4">
              <li className="text-white m-4">
                ??? Swap any Ethereum based Cryptocurrency to $Xara or visa versa
              </li>
              <li className="text-white m-4">
                ??? Create Liquidity Token to invest in Liquidity pool to earn a
                Yield on trading fees of the pool
              </li>
              <li className="text-white m-4">
                ??? Use Liquidity Tokens to invest in Yield Farms to earn APR from
                the Farm
              </li>
              <li className="text-white m-4">
                ??? Stake $Xara to earn an APR and or utilise the DeFi lending or
                borrowing protocols to access equity
              </li>
              <li className="text-white m-4">
                ??? Trade on orders via the Xara City Trading Platform
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="w-[98vw] laptop:w-[60vw]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel7"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            Can I invest in Liquidity Pools and Yield Farming?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Yes, you can fund Liquidity Pools to earn yield on trading fees or
              Farms to earn an APR.
            </p>
            <p className="mb-2 text-white">
              The Xara City Ecosystem i.e. Market Place, P2E Game, and Xaraverse{" "}
              <br></br> ensure a stable inflow and outflow of Xara/USD through
              the Liquidity Pool.
            </p>
            <p className="mb-2 text-white">
              For more details on the $Xara Tokenomics click here
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
      <Accordion
        style={{
          backgroundColor: "#0B091A",
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
        }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className="w-[98vw] laptop:w-[60%] "
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "42px",
              width: "98%",
            }}
            className={
              expanded === "panel7"
                ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text`
                : `text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-transparent hover:bg-clip-text`
            }
          >
            What are Tokenized Assets?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="mb-2 text-white">
              Now you can co-own fractions/portions of rare assets.
            </p>
            <p className="mb-2 text-white">
              Real World Assets are verified and stored in our Xara City Bank
              Vault.<br></br> NFTs are then created for the Asset, allowing the
              owner of the <br></br> original asset to sell off portions of the
              asset as NFTs.
            </p>
            <p className="mb-2 text-white">
              These NFTs are recorded in smart contracts on the Blockchain and
              show <br></br>proof of ownership for the new NFT holder.
            </p>
            <p className="mb-2 text-white">
              Real World Assets offer a stable underlying value for the Xara
              City <br></br> Ecosystem which in turn protects the Liquidity Pool
              and value of $Xara.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr
        className="w-[98vw] laptop:w-[60%] my-1 h-[1px] bg-gray-200 border-0  "
      />
    </div>
  );
};

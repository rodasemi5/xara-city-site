import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ethers } from "ethers";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}



const drawerWidth = 240;


const checkConnect = async () => {	
	try{
	  if(window.ethereum) {
		const isUnlocked = await window?.ethereum?.request({method: 'eth_accounts'});;
		if(isUnlocked.length > 0){
			return("Connected")
		}else{
			return("Connect")
		}
	  }else{
		return("Connect")
	  }
	}catch(e){
		console.log(e)
		return("Connect")
	}

}

const connectWallet = async () => {	
	try{
		if (window.ethereum) {
		  const provider = new ethers.providers.Web3Provider(window.ethereum);
		  await provider.send("eth_requestAccounts", []);
		  const signer = await provider.getSigner();
		  console.log("signer",signer)
		}
	}catch(e){
		console.log(e)
		alert("Something went wrong connecting wallet")
	}
}

export const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loaded, setLoading] = React.useState(false);
  const [walletConnect, setwalletConnect] = React.useState("Connect");
  const navItems = [
	"Home",
	"Ecosystem",
	"Collection",
	"Xaraverse",
	"FAQ",
	"Team",
	walletConnect,
  ];

  React.useEffect(() => {
    setLoading(true);
	const checkConnectEffect = async () => {
		const wStatus = await checkConnect();
		setwalletConnect(wStatus)
	}
	checkConnectEffect();
  }, []);

  const handleOnClicks = async (sectionIndex: any) => {
    if(sectionIndex == 6){
		await connectWallet();
		const wStatus = await checkConnect();
		setwalletConnect(wStatus)
	}
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography className=" pb-20" variant="h6" sx={{ my: 2 }}>
        <div className="flex absolute left-4 top-4 pl-10">
          <img className="w-[200px]" src="/xara_logo.png" alt="profile" />
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="w-full h-16 laptop:h-24 shadow-xl" sx={{ display: "flex" }}>
      <AppBar id="nav" position="static" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <div className="flex absolute top-4 pl-4">
              <img className="w-[200px]" src="/xara_logo.png" alt="profile" />
            </div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item, i) => (
              <button
				onClick = {(e)=>handleOnClicks(i)}
                className={
                  i != navItems.length - 1
                    ? "normal-case text-slate-400 text-lg hover:text-fuchsia-700 m-2 mt-6"
                    : (walletConnect == "Connect" ? "inline-flex items-center text-white font-bold py-2 px-4 rounded bg-fuchsia-700 hover:border-2 hover:bg-transparent hover:border-fuchsia-500 m-2 mt-6": 
					"inline-flex items-center text-white font-bold py-2 px-4 rounded bg-fuchsia-700 hover:border-2 hover:bg-transparent hover:border-fuchsia-500 m-2 mt-6")
                }
                key={item}
              >
                {item}
              </button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

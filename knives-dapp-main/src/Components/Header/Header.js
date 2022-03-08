
//import useState hook to create menu collapse state
import React, { useEffect, useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaDiscord, FaShoppingCart, FaBook} from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {WiStars} from "react-icons/wi"
import {SiDiscord} from "react-icons/si";
import { BsStar} from "react-icons/bs";
import { GiPodium, GiRadarDish, GiHeavyBullets , GiAk47, GiBackpack, GiBattleTank } from "react-icons/gi";
import { AiFillTwitterSquare, AiFillShop, AiOutlineTwitter } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { ImFlag } from "react-icons/im";
import {GrAddCircle} from "react-icons/gr"

import hq from "../../assets/icons/hq.png"
import dash from "../../assets/icons/dash.png"
import invent from "../../assets/icons/invent.png"
import mint from "../../assets/icons/mint.png"
import market from "../../assets/icons/market.png"
import white from "../../assets/icons/white.png"
import upgrade from "../../assets/icons/upgrade.png"
import stake from "../../assets/icons/stake.png"
import barracks from "../../assets/icons/barracks.png"
import discord from "../../assets/icons/discord.png"

import sound from "../../assets/music.mp4";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

// import logo sidebar 
import logo from "../../assets/sidebar/logo.png"



import {
  Link,
  NavLink
} from "react-router-dom";


const Header = () => {
  
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [menuActive, setMenuActive] = useState(true);
 
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

   const menuColorClick = () => {
    //condition checking to change state from true to false and vice versa
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };



  return (
    <>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar  id="header" collapsed={menuCollapse}>
          <SidebarHeader className="sidebar-logo" >
          <div className="sidebar-title">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Knives Legacy"}</p> */}
              <img src={logo}/>
          </div>
          </SidebarHeader>
          <SidebarContent>
            <h2>THE GAME</h2>
            <Menu iconShape="square">
              <NavLink to='/stake'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem >
                  <img src={stake} /> &nbsp; Stake
                </MenuItem>
              </NavLink>
              <NavLink to='/dashboard'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem >
                 <img src={dash} /> &nbsp;  Dashboard 
                </MenuItem>
              </NavLink>
              <NavLink to='/inventory'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem active={false} onClick={menuColorClick}>
                  <img src={invent} /> &nbsp; Inventory
                </MenuItem>
              </NavLink>
              <NavLink to='/headquarters'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem active={false} >
                   <img src={hq} />&nbsp;  Headquarters
                </MenuItem>
              </NavLink>
              <NavLink to='/barracks'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem >
                  <img src={barracks} /> &nbsp; Barracks 
                </MenuItem>
              </NavLink>
              <NavLink to='/score'  className={({ isActive }) => isActive ? "red" : "blue"}> 
                <MenuItem >
                 <img src={upgrade} /> &nbsp; Upgrade Chart
                </MenuItem>
              </NavLink>
            </Menu>
            <h2>ABOUT & OTHER</h2>
              <Menu iconShape="square">
              <a href="https://www.knives-legacy.com/#mint" target="_blank"> 
                <MenuItem  >
                   <img src={mint} /> &nbsp; Mint
                </MenuItem>
              </a>
              <a target="_blank" href="https://marketplace.kalao.io/collection/0x7be6026396eb71465a78154c3dceda5b5b5b4269" to='/inventory'> 
                <MenuItem active={false} onClick={menuColorClick}>
                  <img src={market} /> &nbsp; Marketplace
                </MenuItem>
              </a>
              <a href="https://docs.knives-legacy.com/" target="_blank"> 
                <MenuItem active={false} >
                    <img src={white} /> &nbsp; Whitepaper
                </MenuItem>
              </a>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          
            <Menu>
              <div className="media">
                  <a href="https://twitter.com/KnivesLegacyNFT"><AiOutlineTwitter size={33}  /></a>
                  <a href="https://discord.gg/cXpU77VDDx"> <img width={33} src={discord}/></a>
              </div>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
    </>
  );
};

export default Header;

import React from 'react'
import './home.css'
import "../../App.css"
import profile from "../../assets/home/profile-home.png"
import logo from "../../assets/home/logo-home.png"
import Wallet from "../wallet/wallet";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className='home'>
        <div className='home-wallet'>
            <Wallet/>
        </div>
        <div className='home-center'>
            <div>
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <p> 
                        Soldiers, Avalanche need his army <br/> Will you answer the call ?
                    </p>
                </div>
                <div> 
                    <Link to="/dashboard">ENTER APP &#8674;</Link>
                </div>
            </div>
        </div>
        <div className='home-link'>
            <div>
                <a href='https://www.knives-legacy.com'>MINT</a>
            </div>
            <div>
                <a href="https://docs.knives-legacy.com/">WHITEPAPER</a>
            </div>
            <div>
                <a href="https://marketplace.kalao.io/collection/0x7be6026396eb71465a78154c3dceda5b5b5b4269"> Marketplace</a>
            </div>
        </div>
    </section>
  );
}


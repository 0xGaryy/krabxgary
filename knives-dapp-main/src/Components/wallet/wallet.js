import React from 'react'
import './wallet.css'
import "../../App.css"
import pp from "../../assets/profile-wallet.png"


export default function Wallet() {
  return (
    <div className='wallet'>
        <div>
            <span>0xEF63...4d6E</span>
        </div>
        <div>
            <img src={pp} />
        </div>
    </div>
  );
}


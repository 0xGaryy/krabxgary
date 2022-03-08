import React from 'react'
import '../../App.css'
import Header from '../Header/Header';
import "./barracks.css";
import Wallet from "../wallet/wallet";
import { useState } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";
import settings from "../../assets/barracks/settings.png";
import Footer from '../footer/footer';
import {GiBattleTank} from "react-icons/gi";
import barracks from "../../assets/icons/barracks.png"

export default function Barracks() {
  const [isOpen, setIsOpen] = useState(1);

  function Toggle(){
      if (isOpen === 1){
          setIsOpen(2)
      }else{
          setIsOpen(1)
      }
  }

  return (
    <section className='barracks-bg'>
        <Header/>
        <div className='barracks'>
          <div className='barracks-wallet'>
            <Wallet/>
          </div>
          <div className='barracks-center'>
            <div className='barracks-banner'>
                <div>
                    <h2>AVAX - LEGACY FARM</h2>
                    <a href="https://docs.knives-legacy.com/">Stake infos on the whitepaper <AiFillInfoCircle /></a>
                </div> 
            </div>
            <div className='barracks-container'>
                <div className='barracks-infos'>

                    <div className='barracks-liquidity'>
                        <div>
                            <h3>liquidity</h3>
                            <span> $100.001</span>
                        </div>
                    </div>

                    <div className='barracks-pool'>
                        <div className='barracks-pool_bloc' >
                            <div>
                                <h3>POOL APR</h3>
                                <span> 35.13 % </span>
                            </div>
                        </div>
                        <div className='barracks-pool_bloc' >
                            <div>
                                <h3> Multiplier </h3>
                                <span> $100.001</span>
                            </div>
                        </div>
                    </div>

                    <div className='barracks-liquidity'>
                        <div>
                            <h3>Staked</h3>
                            <span> $100.001</span>
                        </div>
                    </div>

                    <div className='barracks-pool'>
                        <div className='barracks-pool_bloc' >
                            <div>
                                <h3>Rewards</h3>
                                <span> $100.001</span>
                            </div>
                        </div>
                        <div className='barracks-pool_bloc' >
                            <div>
                                <h3>% unlocked</h3>
                                <span> $100.001</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='barracks-stake'>
                    <div className='barracks-stake_flex'>
                        <div>
                            <button onClick={() => setIsOpen(1)} className={isOpen === 1 ? "btn-active" : null} id='stake'>Stake</button>
                            <span>|</span>
                            <button onClick={() => setIsOpen(2)} id='unstake' className={isOpen === 2 ? "btn-active" : null}>Unstake</button>
                        </div>
                        <div>
                            <button onClick={Toggle} className='btn-settings'><img src={settings} /> </button>
                        </div>
                    </div>
                    <div className='barracks-stake_flex_two'>
                        <div>
                            <span>LP Token balance</span>
                        </div>
                        <div>
                            <span>0</span>
                        </div>
                    </div>

                    <div className='barracks-token'>
                        <div className='barracks-input'>
                            <div>
                                <input type="number" defaultValue='0.0' min="0" />
                            </div>
                            <div>
                                <button>MAX</button>
                            </div>
                        </div>

                        <div className='barracks-pair' >
                            <span>$AVAX-$LGCY</span>
                        </div>
                    </div>

                    {isOpen === 1 ? 

                    <div className='barracks-button_stake'>
                        <button>STAKE</button>
                        <button>HARVEST</button>
                    </div>

                    :

                    <div className='barracks-button_withdraw'>
                        <button>WITHDRAW</button>
                    </div>
                    }

                    
                </div>
            </div>
          </div>
          <Footer icon={<img src={barracks} />} title="Barracks"/>
        </div>
    </section>
  );
}


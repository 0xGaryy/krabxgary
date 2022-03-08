import Header from "../Header/Header";
import Wallet from "../wallet/wallet";
import "./stake.css";
import "../../App.css"

import knive from "../../assets/stake/couteau.png"
import line from "../../assets/line.png";

import Footer from "../footer/footer";

import { AiFillInfoCircle } from "react-icons/ai";
import {GiHeavyBullets} from "react-icons/gi";

import banner from "../../assets/stake/banner.jpeg";

import stake from "../../assets/icons/stake.png";

export default function Stake(){
    return(
        <section className='section stake-bg'>
            <Header/>
            <div className="stake">
                <div className="stake-wallet">
                    <Wallet/>
                </div>
                <div className="stake-center">
                    <div className="stake-banner">
                        <div>
                            <h2>STAKE YOUR NFTS</h2>
                            <p>1 staked knife produce <br/> 115 locked $LGCY/day</p>
                            <a target="_blank" href="https://docs.knives-legacy.com/">Stake infos on the whitepaper <AiFillInfoCircle/></a>
                        </div>
                    </div>
                    <div className="stake-container">
                        <div>
                            <h2>Your NFTs</h2>
                            <div className="your-nft">
                                <div>
                                    <img src={knive} />
                                </div>
                                 <div>
                                    <img src={knive} />
                                </div>
                                 <div>
                                    <img src={knive} />
                                </div>
                                 <div>
                                    <img src={knive} />
                                </div>
                                 <div>
                                    <img src={knive} />
                                </div>
                            </div>
                            <button>
                                DEPOSIT
                            </button>
                        </div>
                        <div>
                            <h2>Staked</h2>
                            <div className="staked">
                                <div>
                                  
                                </div>
                                 <div>
                                    {/* <img src={knive} /> */}
                                </div>
                                 <div>
                                    {/* <img src={knive} /> */}
                                </div>
                                 <div>
                                    {/* <img src={knive} /> */}
                                </div>
                                 <div>
                                    {/* <img src={knive} /> */}
                                </div>
                            </div>
                            <button>
                                WITHDRAW
                            </button>
                        </div>
                    </div>
                </div>
                <Footer icon={<img src={stake} />} title="Stake"/>
            </div>
        </section>
    )
}
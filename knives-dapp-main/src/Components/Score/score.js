import React from 'react'
import Header from '../Header/Header';
import "../../App.css"
import "./score.css"
import Wallet from '../wallet/wallet';
import Footer from '../footer/footer';

import bootsGrey from "../../assets/upgrade/boots-grey.png"
import bootsPurple from "../../assets/upgrade/boots-purple.png"
import bootsBlue from "../../assets/upgrade/boots-blue.png"
import bootsOr from "../../assets/upgrade/boots-or.png"

import plastronBlue from "../../assets/upgrade/plastron-blue.png"
import plastronGrey from "../../assets/upgrade/plastron-grey.png"
import plastronPurple from "../../assets/upgrade/plastron-purple.png"
import plastronOr from "../../assets/upgrade/plastron-or.png"

import backpackOr from "../../assets/upgrade/backpack-or.png"
import backpackBlue from "../../assets/upgrade/backpack-blue.png"
import backpackPurple from "../../assets/upgrade/backpack-purple.png"
import backpackGrey from "../../assets/upgrade/backpack-grey.png"

import helmetOr from "../../assets/upgrade/casque-or.png"
import helmetBlue from "../../assets/upgrade/casque-blue.png"
import helmetPurple from "../../assets/upgrade/casque-purple.png"
import helmetGrey from "../../assets/upgrade/casque-grey.png"


import { HiArrowCircleRight } from "react-icons/hi";
import {BiTrendingUp} from "react-icons/bi";
import { GiPodium } from "react-icons/gi"

import upgrade from "../../assets/icons/upgrade.png";

function Score() {
  return (
    <section className='section upgrade-bg'>
        <Header/>
        <div className='upgrade'>
          {/* bloc 1 */}
            <div className='upgrade-wallet'>
              <Wallet/>
            </div>
            {/* bloc 2 */}
            <div className='upgrade-center'>
              {/* boots */}
              <div className='upgrade-bloc'>
                <h3>BOOTS</h3>
                <div className='line'>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={bootsGrey} />
                    <span>Score : 8</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>30 $LGCY </span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={bootsBlue} />
                    <span>Score : 24</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>60 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={bootsPurple} />
                    <span>Score : 72</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>240 $LGCY </span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <img src={bootsOr} />
                    <span>Score : 216</span>
                  </div>
                </div>
              </div>
              {/* BREASTPLATE */}
              <div className='upgrade-bloc'>
                <h3>BREASTPLATE</h3>
                <div className='line'>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={plastronGrey} />
                    <span>Score : 10</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>60 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={plastronBlue} />
                    <span>Score : 30</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>120 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={plastronPurple} />
                    <span>Score : 90</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>480 $LGCY </span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <img src={plastronOr} />
                    <span>Score : 270</span>
                  </div>
                </div>
              </div>
              {/* BACKPACK */}
              <div className='upgrade-bloc'>
                <h3>BACKPACK</h3>
                <div className='line'>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={backpackGrey} />
                    <span>Score : 14</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>120 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={backpackBlue} />
                    <span>Score : 42</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>240 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={backpackPurple} />
                    <span>Score : 126</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>960 $LGCY </span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <img src={backpackOr} />
                    <span>Score : 378</span>
                  </div>
                </div>
              </div>
              {/* HELMET */}
              <div className='upgrade-bloc'>
                <h3>BACKPACK</h3>
                <div className='line'>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={helmetGrey} />
                    <span>Score : 20</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>240 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={helmetBlue} />
                    <span>Score : 60</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>480 $LGCY</span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <div className='multiple'>
                      <span>X3</span>
                    </div>
                    <img src={helmetPurple} />
                    <span>Score : 180</span>
                  </div>
                  <div className='upgrade-points'>
                    <span>1920 $LGCY </span>
                    <HiArrowCircleRight />
                  </div>
                  <div className='line-img'>
                    <img src={helmetOr} />
                    <span>Score : 540</span>
                  </div>
                </div>
              </div>
            </div>
            {/* bloc 3 */}
            <Footer icon={<img src={upgrade} />}  title="Upgrade Chart"/>
        </div>
    </section>
  );
}

export default Score;

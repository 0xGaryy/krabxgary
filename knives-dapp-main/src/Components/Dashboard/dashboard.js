import React from 'react'
import { useState } from 'react';
import './dashboard.css'
import Header from '../Header/Header';
import Wallet from '../wallet/wallet';
import knive from "../../assets/stake/couteau.png"

import "../../App.css"
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Navigation
} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link, useNavigate } from "react-router-dom";
import soldat from "../../assets/dashboard/soldat.png";
import couteau from "../../assets/dashboard/couteau.png";
import bag from "../../assets/icons/money.png"
import rewards from "../../assets/dashboard/rewards.png"
import casque from "../../assets/icons/casque.png"
import boots from "../../assets/icons/boots.png"
import plastron from "../../assets/icons/plastron.png"
import inventory from "../../assets/icons/Inventory.png"
import line from "../../assets/line.png";


import {BsChevronUp, BsChevronDown} from "react-icons/bs";
import { HiArrowCircleRight } from "react-icons/hi";
import { GiRadarDish } from "react-icons/gi"
import {AiFillCheckCircle} from "react-icons/ai";
import { FaLock } from "react-icons/fa";

import helmet from "../../assets/dashboard/helmet.png"
import plastronn from "../../assets/dashboard/plastron.png";
import backpack from "../../assets/dashboard/backpack.png";
import bootss from "../../assets/dashboard/boots.png";

import dash from "../../assets/icons/dash.png";


import Footer from '../footer/footer';

SwiperCore.use([
    Navigation
]);

export default function Dashboard() {
  let navigate = useNavigate();

 function mission(id){
    navigate("/headquarters?mission=" + id)
  }
 
  return (
    <section className='section dashboard-bg'>
        <Header/>
        <div className='dashboard'>
          <div className='dashboard-wallet'>
            <Wallet/>
          </div>
          <div className='dashboard-center'>
            <div className='dashboard-soldier'>
              <div>
                <div className='review-swiper-button-next'><BsChevronUp size={20}/></div>
                <Swiper
                  direction='vertical'
                  
                  slidesPerView={5}
                  loop={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={swiper => console.log(swiper)}
                  navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                  }}
                >
                   <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={knive}/>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className='review-swiper-button-prev'><BsChevronDown size={20} /></div>
              </div>
              <div className='dashboard-img_soldier' >
                <div>
                  <p>Switch soldier by selecting a knife</p>
                </div>
                <div className='img-soldier'>
                   <div className='soldier-name'>
                      <p>SOLDIER's NAME</p>
                      <p>Score : 45 </p>
                  </div>
                  <div className='img-full_soldier' >
                    <img src={soldat}/>
                  </div>
                </div>
                <div className='dashboard-link_inventory'>
                  <div>
                    <Link to="/inventory">INVENTORY <HiArrowCircleRight /></Link>  
                  </div>
                </div>
              </div>
              <div className='dashboard-loot'>
                <div className='dashboard-loot_score'>
                  <div>
                    <img src={helmet}/>
                  </div>
                  <div>
                    <span>Score : 24</span>
                  </div>
                </div>

                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={plastronn}/>
                  </div>
                  <div>
                    <span>Score : 24</span>
                  </div>
                </div>

                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={backpack}/>
                  </div>
                  <div>
                    <span>Score : 24</span>
                  </div>
                </div>
                
                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={bootss}/>
                  </div>
                  <div>
                    <span>Score : 24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashboard-mission'>
              <p>Check missions and collect rewards</p>
              <div className='dashboard-mission_bloc'>
                <div onClick={()=> mission(1)} className='mission'>
                  <div>
                      <AiFillCheckCircle size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Supply Operation</span>
                    <span>Your $LGCY rewards depend of your score</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={bag} alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+$LGCY</span>
                  </div>
                </div>
                <div onClick={()=> mission(2)} className='mission'>
                  <div>
                      <AiFillCheckCircle size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Surveillance of public places</span>
                    <span>Available mission</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={boots} alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+8pts</span>
                  </div>
                </div>
                <div onClick={()=> mission(3)} className='mission'>
                  <div>
                      <AiFillCheckCircle size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Terrorist attack : emergency response</span>
                    <span>Available mission - Score&gt;24 required</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={plastron} alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+10pts</span>
                  </div>
                </div>
                <div onClick={()=> mission(4)} className='mission locked'>
                  <div>
                      <FaLock  size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Opex: Sensitive operation in Africa</span>
                    <span>Locked mission - Score&gt;54 required</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={inventory} width="30px" alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+14pts</span>
                  </div>
                </div>
                <div onClick={()=> mission(5)} className='mission locked'>
                  <div>
                      <FaLock  size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Emergency response by the elite unit</span>
                    <span>Locked mission - Score&gt;96 required</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={casque} alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+20pts</span>
                  </div>
                </div>
                <div className='dashboard-link_inventory'>
                  <div>
                    <Link to="/inventory">HEADQUARTERS <HiArrowCircleRight /></Link>  
                  </div>
                </div>
                <div className='dashboard-rewards'>
                  <button>
                    <img src={rewards}></img>
                    <div>
                      <span>CLAIM MY <br/> REWARDS</span>
                    </div>
                  </button>
                </div>
                <div className='dashboard-time'>
                  <div>
                    <p>Item Mission - Available in.. <span>7 hours 31 minutes</span> <br/></p>
                    <p>$LGCY Mission - Available in.. <span>7 hours 31 minutes</span></p>

                    {/* <p>You can burn 100 $LGCY to skip the cooldown.</p> */}
                  </div>
                  {/* <div>
                    <Link to="/inventory"> BURN <HiArrowCircleRight /></Link>  
                  </div> */}
                </div>
                <div className='dashboard-next-mission'>
                </div>
              </div>
            </div>
          </div>
          <Footer icon={<img src={dash} />} title="Dashboard"/>
        </div>
    </section>
  );
}


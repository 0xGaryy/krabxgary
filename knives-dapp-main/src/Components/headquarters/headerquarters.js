import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import "../../App.css"
import "./hq.css"
import Wallet from "../wallet/wallet";
import Footer from '../footer/footer';


import soldat from "../../assets/dashboard/soldat.png";
import couteau from "../../assets/dashboard/couteau.png";
import bag from "../../assets/icons/money.png"
import rewards from "../../assets/dashboard/rewards.png"
import casque from "../../assets/icons/casque.png"
import boots from "../../assets/icons/boots.png"
import plastron from "../../assets/icons/plastron.png"
import inventory from "../../assets/icons/Inventory.png"
import { Link, useParams, useSearchParams } from "react-router-dom";
import contour from "../../assets/hq/contour.png"

import {BsChevronUp, BsChevronDown} from "react-icons/bs";
import { HiArrowCircleRight } from "react-icons/hi";
import { GiRadarDish } from "react-icons/gi"
import {AiFillCheckCircle} from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { ImFlag } from 'react-icons/im';

import bgUn from "../../assets/bgmission/bg_mission_un.png";
import bgDeux from "../../assets/bgmission/bg_mission_deux.png";
import bgTrois from "../../assets/bgmission/bg_mission_trois.png";
import bgElite from "../../assets/bgmission/bgelite.png";
import bgSupply from "../../assets/bgmission/bgsupply.png";



import btn from "../../assets/hq/btn.png"
import hq from "../../assets/icons/hq.png";


 export default function Headerquarters() {
  const [ mission, SetMission ] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    if(searchParams.get("mission")){
      SetMission(parseInt(searchParams.get("mission")));
    }
  },[])



  return (
    <section className='section hq-bg'>
        <Header/>
        <div className='hq'>

            <div className='hq-wallet'>
              <Wallet/>
            </div>

            <div className='hq-center'>
              <div className='dashboard-mission_bloc'>
                <h2>AVAILABLE MISSIONS</h2>
                <div onClick={()=> SetMission(1)} className='mission'>
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
                <div onClick={()=> SetMission(2)}  className='mission'>
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
                <div onClick={()=> SetMission(3)}  className='mission'>
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
                <h2>LOCKED MISSIONS</h2>
                <div onClick={()=> SetMission(4)} className='mission locked'>
                  <div>
                      <FaLock  size={30}/>
                  </div>
                  <div className='title-mission'>
                    <span>Opex: Sensitive operation in Africa</span>
                    <span>Locked mission - Score&gt;54 required</span>
                  </div>
                  <div className='icon-mission'>
                      <img src={inventory} width="26px" alt='bag money'></img>
                  </div>
                  <div className='points'>
                    <span>+14pts</span>
                  </div>
                </div>
                <div onClick={()=> SetMission(5)} className='mission locked'>
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
              </div>
              <div className='hq-description-mission'>
                <div className='test'>
                  { mission === 1 ? 
                    <div className='mission-content'>
                      <div>
                        <img src={bgSupply}  /> 
                        <h3>Supply mission</h3>
                        <p>
                          Soldiers, 
                          <br/><br/>
                           We have a little rest today, we will take advantage of it to check our stocks and our materials. You will start by refueling all our vehicles and check their operation.
                          <br/><br/>
                          Then you will clean and test all our weapons, as well as take inventory and fill up our ammunition. Everything must be noted, and everything must be returned to the stockpile planned to last 3 days soldiers.
                          <br/><br/>
                          Finally, once you have finished touring all of our facilities and equipment, you will have the remaining hours off until the end of the day. 
                          <br/><br/>
                          Dismissed Soldiers.
                        </p>
                      </div>
                    </div>
                    : mission === 2 ? 
                    <div className='mission-content'>
                      <div>
                        <img src={bgDeux}  /> 
                        <h3> Surveillance of public places </h3>
                        <p>
                          Soldiers, 
                          <br/><br/>
                          Even the least challenging missions are important. I expect you to be totally exemplary in the execution of it. 
                          <br/><br/>
                          This is our first duty, the protection of our country's civilians. 
                          <br/><br/>
                          That is why today you will be sent to various important public places where there is a lot of people and movement. Your mission will be to ensure the safety of each individual on the spot, and to make sure that calm and order reign in our streets.
                          <br/><br/>
                          You will be under my direct command, in case of disturbances to the public order you will inform me of the evolution of the situation on the spot and wait for my orders, in case of emergencies, you are authorized to take the necessary initiatives. Do not underestimate this mission soldier, things can quickly get out of control. If we do not make peace in our own country, then we are not worthy of being part of this army! Dismissed soldiers, and good luck !
                          </p>
                        </div>
                    </div>
                    : mission === 3 ?
                    <div className='mission-content'>
                      <div>
                        <img src={bgUn}  /> 
                        <h3>Terrorist attack : emergency response</h3>
                        <p>
                          Soldiers, 
                          <br/><br/>
                          Soldiers, We have a terrorist alert! According to the testimonies we have in real time, shots are heard everywhere in the city, we expect a coordinated attack of a terrorist group! 
                          <br/><br/>
                          
                          We must at all costs eliminate the threat and restore security and peace in our territory. 
                          <br/><br/>
                          
                          Your emergency response team is being dispatched to one of the locations where we heard gunshots. Be careful soldiers, the enemy is armed and dangerous. We do not know their numbers or their means. They could have planted bombs. Your intervention will be coordinated by your Colonel. On the spot, it is to him and to him alone that you will obey. All information necessary for the good progress of the intervention will have to be communicated to him. You have the authorization to shoot on sight in contact with an armed suspect. Dismissed soldiers, and good luck!
                        </p>
                      </div>
                    </div>
                    : mission === 4 ? 
                    <div className='mission-content'>
                      <div>
                      <img src={bgTrois} /> 
                      <h3>Opex : Sensitive operation in Africa</h3>
                      <p>
                        Soldiers, 
                        <br/><br/>
                        We have identified the terrorist group responsible for the large-scale attack on our territory. It is the group "Glas sunca". 
                        <br/><br/>
                        According to our information, their leader resides in a territory called "Solara" in Africa.
                        <br/><br/>
                        You are now an experienced soldier, and it is time for you to go and defend our country beyond our borders. This is a national security mission, but this war is also ideological. 
                        <br/><br/>
                        We will defend our open vision and the benevolence that reigns on our territory to all those who want to attack it.
                        <br/><br/>
                        Let the avalanche overwhelm them from all sides, and let this serve as a lesson to the next. Dismissed soldiers, and good luck !
                      </p>
                      </div>
                    </div>
                    : mission === 5 ? 
                    <div className='mission-content'>
                      <div>
                      <img src={bgElite} /> 
                      <h3>Elite Unit Intervention </h3>
                      <p>
                        Soldiers, 
                        <br/><br/>
                        Our Chief of Staff is traveling to Solara to negotiate a truce. According to our informations, he was the victim of an ambush! It is a real butchery! We have no more feedback from our soldiers on site, we expect to have suffered immeasurable losses.
                        <br/><br/>
                        The priority is the extraction of the chief of staff, who according to our information is held in the bastion of Solara. 
                        <br/><br/>
                        We have conducted several studies of the building, and it has been deduced that the one and only way to enter and exit without high casualties is through the roof accompanied by a helicopter.
                        <br/><br/>
                        We will have to be fast, coordinated and efficient. I don't like to say it but... it's a mission close to suicide. You are now our most experienced soldier out there, so you will be the leader of the intervention.
                        <br/><br/>
                        Soldiers, know that if this goes wrong, you and your comrades will always be remembered as heroes by the nation. Dismissed soldiers, and good luck !
                      </p>
                      </div>
                    </div>
                    : null
                  }
                </div>
                <div className='btn-start'>
                  <button><img src={btn} /></button>
                </div>
                
              </div>
            </div>
            <Footer icon={<img src={hq} />} title="Headquarters"/>
        </div>
    </section>
  );
}



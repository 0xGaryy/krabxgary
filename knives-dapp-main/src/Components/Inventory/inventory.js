import React, { useState } from 'react'
import '../../App.css'
import Header from '../Header/Header';
import "./inventory.css";
import soldat from "../../assets/dashboard/soldat.png"
import Wallet from "../wallet/wallet";
import backpack from "../../assets/inventory/backpack.png";
import Footer from '../footer/footer';
import { GiBackpack } from "react-icons/gi";

import helmet from "../../assets/dashboard/helmet.png"
import plastronn from "../../assets/dashboard/plastron.png";
import backpacke from "../../assets/dashboard/backpack.png";
import bootss from "../../assets/dashboard/boots.png";

import invent from "../../assets/icons/invent.png";



export default function Inventory() {

  const [isFilter, SetIsFilter] = useState(1);

  return (
    <section className='inventory-bg'>
        <Header/>
        <div className='inventory'>
          <div className='inventory-wallet'>
            <Wallet/>
          </div>
          <div className='inventory-center'>
           <div className='dashboard-soldier'>
              <div className='inventory-img_soldier' >
                <div>
                  <h2>YOUR CURRENT EQUIPMENT</h2>
                </div>
                <div className='img-soldier'>
                   <div className='soldier-name'>
                      <p>SOLDIER's NAME</p>
                      <p>Score : 45 </p>
                  </div>
                  <img src={soldat}/>
                </div>
              </div>
              <div className='dashboard-loot'>
                <div className='dashboard-loot_score'>
                  <div>
                    <img src={helmet} />
                  </div>
                  <div>
                    <span>Score : 0</span>
                  </div>
                </div>

                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={plastronn} />
                  </div>
                  <div>
                    <span>Score : 0</span>
                  </div>
                </div>

                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={backpacke} />
                  </div>
                  <div>
                    <span>Score : 0</span>
                  </div>
                </div>
                
                 <div className='dashboard-loot_score'>
                  <div>
                    <img src={bootss} />
                  </div>
                  <div>
                    <span>Score : 0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='inventory-factory'>
                <h2>THE FACTORY</h2>
                <div className='inventory-factory_bloc'>
                  <div>

                  </div>
                  <div>
                    +
                  </div>
                  <div>

                  </div>
                  <div>
                    +
                  </div>
                  <div>

                  </div>
                  <div>
                    =
                  </div>
                  <div>

                  </div>
                </div>
                <div className='inventory-factory_button'>

                  <div>
                    <button>
                    BURN THESE ITEMS
                    </button>
                  </div>

                  <div>
                    <button>
                    SEND TO INVENTORY
                    </button>
                  </div>

                </div>
                <div className='inventory-inventory'>

                  <div className='inventory-inventory_title'>
                    <div>
                      <h2>INVENTORY</h2>
                    </div>
                    <div className='inventory-filter'>
                      <div>
                        <span>Filter by:</span>
                      </div>
                      <button onClick={() => SetIsFilter(1)} className={isFilter === 1 ? "filter-active" : null} >
                        Score
                      </button>
                      |
                      <button onClick={() => SetIsFilter(2)} className={isFilter === 2 ? "filter-active" : null}  >
                      Item
                      </button>
                    </div>
                  </div>
                  <div className='inventory-inventory_bloc'>

                    <div>
                      <div>
                        <img src={backpack} alt="backpack" />
                      </div>
                      <div className='inventory-inventory_score'>
                        <span>SCORE : 0</span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={backpack} alt="backpack" />
                      </div>
                      <div className='inventory-inventory_score'>
                        <span>SCORE : 0</span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={backpack} alt="backpack" />
                      </div>
                      <div className='inventory-inventory_score'>
                        <span>SCORE : 0</span>
                      </div>
                    </div>                    
                    
                  </div>
                </div>
                <div className='inventory-factory_button'>

                  <div>
                    <button>
                    EQUIP THIS ITEMS
                    </button>
                  </div>

                  <div>
                    <button>
                    SEND TO BURN
                    </button>
                  </div>

                </div>
              </div>
            </div>
            <Footer icon={<img src={invent} />}   title="Inventory"/>
        </div>
    </section>
  );
}



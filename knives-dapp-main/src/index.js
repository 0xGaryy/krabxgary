import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Inventory from './Components/Inventory/inventory';
import Dashboard from './Components/Dashboard/dashboard';
import Score from './Components/Score/score';
import Headerquarters from './Components/headquarters/headerquarters';
import Home from './Components/home/home';
import Stake from './Components/Stake/stake';
import Barracks from './Components/Barracks/barracks';
import sound from "./assets/music.mp4";


const rootElement = document.getElementById("root");

render(
	<BrowserRouter>
       <Routes>
		      <Route path="/" element={<Home/>}/>
		      <Route path="/stake" element={<Stake/>}/>
		      <Route path="/dashboard" element={<Dashboard/>}/>
		      <Route path="/inventory" element={<Inventory/>}/>
		      <Route path="headquarters" element={<Headerquarters/>}/>
		      <Route path="/barracks" element={<Barracks/>}/>
		      <Route path="score" element={<Score/>}/>
	    </Routes>
    </BrowserRouter>,
  rootElement
);




import React from 'react';
import {Link} from 'react-router-dom';
import avatar from './avatar.jpg'
import black_panther from './black_panther.jpg'
import shang_chi from './shang_chi.jpg'
import end_game from './end_game.jpg'
import no_way_home from './no_way_home.jpg'
import dr_strange_2 from './dr_strange_2.jpg'
import eternals_landscape from './eternals_landscape.jpg'
import header from './header.png'

import './App.css';

function New_fun() {
  return (
   <div>
      <div>
      <img src = {header} width = "1540px" className= "img"/>
      <div id = "pointer">
      <nav>
        <Link  id = "text" to = "/App1">Sign In!</Link> 
      </nav>
      </div>
      </div>
      <div className="sidenav">
      <a href="#Movies">Movies</a>
      <a href="#Streams">Streams</a>
      <a href="#Sports">Sports</a>
      <a href="#Events">Events</a>
      </div>
      <div id = "mark">
      <marquee behavior="slide" direction="left" id = "m" scrollamount = "20" >
        <img src={no_way_home} width="450px" height="300px" alt="spiderman" padding = "5px"/>
        <img src={dr_strange_2} width="450px" height="300px" alt="dr.strange" padding = "5px"/>
        <img src={eternals_landscape} width="450px" height="300px" alt="eternals" padding = "5px"/>
      </marquee>
      </div>
      <div>
        <h1 id = "h1">Recommended Movies</h1>
      </div>
      <div id="row">
        <div id="column1">
          <img src={avatar} alt="Avatar" id = "img1"/>
        </div>
        <div id="column2">
          <img src={black_panther} alt="Black_panther" id = "img1"/>
        </div>
        <div id="column3">
          <img src={shang_chi} alt="Shang_chi" id = "img1"/>
        </div>
        <div id="column4">
          <img src={end_game} alt="End_game" id = "img1"/>
        </div>
      </div>
      </div>
  )
}


export default New_fun;

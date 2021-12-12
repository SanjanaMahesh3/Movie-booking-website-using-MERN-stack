import './Kan.css';
import header from './header.png'
import puneeth from './puneeth.jpg'
import sud from './sud.jpg'
import avatar from './avatar.jpg'
import shang_chi from './shang_chi.jpg'
import black_panther from './black_panther.jpg'
import end_game from './end_game.jpg'
import diya from './diya.jpg'
import dr_strange_2 from './dr_strange_2.jpg'
import no_way_home from './no_way_home.jpg'
import eternals_landscape from './eternals_landscape.jpg'
import React from 'react';
import darsh from './darsh.jpg'
import {Link} from 'react-router-dom';
import login from './login.jfif'

function Kan()
{
    return(<div>
        <img src = {header} width = "1540px" id = "img"/>
        <h1 style={{left:"750px",position:"absolute",top:"50px"}}>Movies</h1>
        <img className="Log" src={login} width="50px"/>
        <div className="sidenav">
  
        </div>
        <h2 className="Wel">Welcome</h2>
    
    <div id = "mark">
    <marquee behavior="slide" direction="left" id = "m" scrollamount = "20" >
        <img src={puneeth} width="450px" height="300px" alt="spiderman" padding = "5px"/>
        <img src={sud} width="450px" height="300px" alt="dr.strange" padding = "5px"/>
        <img src={diya} width="450px" height="300px" alt="eternals" padding = "5px"/>
    </marquee>
    </div>
    <div>
        <h1 id = "h1">Recommended Movies</h1>
    </div>
    <div id="row">
      <div id="column1">
        <img src={sud} alt="Avatar" id = "img1"/>
      </div>
      <div id="column2">
        <img src={diya} alt="Black_panther" id = "img1"/>
      </div>
      <div id="column3">
        <img src={puneeth} alt="Shang_chi" id = "img1"/>
      </div>
        <div id="column4">
        <img src={darsh} alt="End_game" id = "img1"/>
      </div>
    </div>
    </div>)
}
export default Kan
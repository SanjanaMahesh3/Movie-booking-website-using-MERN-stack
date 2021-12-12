import './page5.css';
import header from './header.png'

import React from 'react';
import {Link} from 'react-router-dom';
import avengers from './avengers.jfif'
import rdj from './rdj.jfif'
import sj from './sj.jfif'

function App4(){
    return(
        <div>
          <img src = {header} width = "1540px" className = "img"/>
          <div className="div1">
            <img className="Img1" src={avengers} alt="Avengers"/>
            <h1 className="Aven">AVENGERS ENDGAME</h1>
            <div className="Dis">
            <p>Description</p>
                          <p>After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.</p>
            </div>
            <div className="Svg">
            <h2>
            <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L22.0413 12.7832H35.119L24.5389 20.6836L28.5801 33.4668L18 25.5664L7.41987 33.4668L11.4611 20.6836L0.880983 12.7832H13.9587L18 0Z" fill="#F4E130"/>
            </svg>
                          <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L22.0413 12.7832H35.119L24.5389 20.6836L28.5801 33.4668L18 25.5664L7.41987 33.4668L11.4611 20.6836L0.880983 12.7832H13.9587L18 0Z" fill="#F4E130"/>
            </svg>
                          <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L22.0413 12.7832H35.119L24.5389 20.6836L28.5801 33.4668L18 25.5664L7.41987 33.4668L11.4611 20.6836L0.880983 12.7832H13.9587L18 0Z" fill="#F4E130"/>
            </svg>
                          <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L22.0413 12.7832H35.119L24.5389 20.6836L28.5801 33.4668L18 25.5664L7.41987 33.4668L11.4611 20.6836L0.880983 12.7832H13.9587L18 0Z" fill="#F4E130"/>
            </svg>
                          <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L22.0413 12.7832H35.119L24.5389 20.6836L28.5801 33.4668L18 25.5664L7.41987 33.4668L11.4611 20.6836L0.880983 12.7832H13.9587L18 0Z" fill="#616159"/>
            </svg></h2></div>
                        
                          <div className="Hide">
                              <h3 className="H3a">English</h3>
                              <h3 className="H3b">Hindi</h3>
                              <h3 className="H3c">Kannada</h3>
                              <h3 className="H3d">2D</h3>
                              <h3 className="H3e">3D</h3>
                          </div>
                          
          </div>
         
                      <div className="div5">
                          <h2 className="Cast">Cast: </h2>
                          <div className="div6">

                        <div className="Act">
                          <a href="https://en.wikipedia.org/wiki/Robert_Downey_Jr." target="__blank">
                        <img className="img2" src={rdj} alt="Robert Downey Junior" />
                          </a>

                          <a href="https://en.wikipedia.org/wiki/Scarlett_Johansson" target="__blank">
                        <img className="img2" src={sj} alt="Scarlett Johansson" />
                          </a>
                          </div>
                          </div>
                          <div>
                          <h2 className="H2z">Reviews:</h2>
                          <div class="Rev">
                          <div className="div7">
                              <h2 className="H2a">Times Of India</h2>
                              <p style={{width:"400px"}}>
                              'Avengers: Endgame' is a befitting tribute to the Cinematic Universe that has spawned larger-than-life superheroes and super fans. At three hours plus, ‘Endgame’ delivers on a lot of its hallmark promises, leaving its fans with a range of emotions and fond memories.
                              </p>
                          </div>&nbsp;&nbsp;
                          <div className="div9">
                              <h2 className="H2b">Times Of India</h2>
                              <p style={{width:"400px"}}>
                              'Avengers: Endgame' is a befitting tribute to the Cinematic Universe that has spawned larger-than-life superheroes and super fans. At three hours plus, ‘Endgame’ delivers on a lot of its hallmark promises, leaving its fans with a range of emotions and fond memories.
                              </p>
                          </div>&nbsp;&nbsp;
                          <div className="div10">
                             
                              <p style={{width:"400px"}}>
                              
                              </p>
                          </div>&nbsp;&nbsp;<br/><br/>
                          <div className="div11">
                             
                              <p style={{width:"400px"}}>
                             
                              </p>
                              </div>
                          </div>&nbsp;&nbsp;
                  
                       </div>
                      </div>
                      <div className="BT">
                      <nav>
        <Link  to = "/App6">Book Tickets</Link> 
                    </nav>
                      </div>
        <div className="Use"><p>Available in The Following Formats</p></div>
        </div>)
}

export default App4
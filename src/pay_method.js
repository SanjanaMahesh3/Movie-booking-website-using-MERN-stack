
import './pay_method.css';
import header from './header.png'

import React from 'react';
import {Link} from 'react-router-dom';
function App7() {
  return (
    <div><img src = {header} width = "1540px" id = "img"/>
		  <h2 className="H2">Payment details</h2>
		   <form>
		   <h3 className="Payopt">Payment Options Available</h3>
		  
		   <p className="Card"><input id="I2" type="button"/><nav><Link class="Link2" to="./App9">Card</Link></nav><label id="L2"></label></p>
		 

		   
		   </form>
		  </div>
  )
}


export default App7;
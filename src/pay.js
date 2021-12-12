import React from 'react';
import {Link} from 'react-router-dom';
import './pay.css';
import header from './header.png'
function App9() {
  return (
    <div><img src = {header} width = "1540px" id = "img"/>
		  <h2 className="H2">Payment Details</h2>
		  <span  className="You"><form method="post">
		  <p>Card Number:<input type="text" pattern="[0-9]{12}" title="Enter the 12 digit Card number" required name="num"/></p>
		  <p>Name on the card:<input type="text" required name="name" /></p>
		  <p>Valid Upto:<input type="date" name="val" required/></p>
		  <p>CVV:<input type="text" name="cvv" required pattern="[0-9]{3}" title="Enter the 3 digit CVV"/></p>
		  
		  <p id="Y">
		  
		  
		  </p>
		  </form>
		  </span>
		  <nav><Link className="Link1" to="./otp">Next</Link></nav>
		  </div>
  )
}


export default App9;
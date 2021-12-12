import './otp_valid.css';
import header from './header.png'
import React from 'react';
import {Link} from 'react-router-dom';

class Otp extends React.Component {
	constructor() {
		super();
		this.state = { time: {}, seconds: 120 };
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs){
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			"h": hours,
			"m": minutes,
			"s": seconds
		};
		return obj;
	}

componentDidMount() {
let timeLeftVar = this.secondsToTime(this.state.seconds);
this.setState({ time: timeLeftVar });
}

startTimer() {
if (this.timer == 0 && this.state.seconds > 0) {
  this.timer = setInterval(this.countDown, 1000);
}
}

countDown() {
// Remove one second, set state so a re-render happens.
let seconds = this.state.seconds - 1;
this.setState({
  time: this.secondsToTime(seconds),
  seconds: seconds,
});

// Check if we're at zero.
if (seconds == 0) { 
  clearInterval(this.timer);
}
}
 render()
 {
  return (
    <div>
        <img src = {header} width = "1540px" id = "img"/>
        <div id = "root"></div>
		<h1 id="H1">Payment Validation with OTP</h1>
		   <span className="Ay"><form  method="post">
			 
			 <p>Enter the 5 digit OTP sent to your registered mobile number:</p>
			 <p> <input type="text" onClick={this.startTimer} required pattern="[0-9]{5}" title="Enter the 5 digit otp sent to your registered mobile number" name="otp"/></p>
			 <p id="S1"><input type="reset" name="res" value="Resend" /></p>
			 <p id="R1"><nav>
				 <Link to="/Ticket"><input type="submit" name="re"/></Link>
				 </nav></p>
			 
			 </form></span>
			 <span className="Span">
       		 Time left: {this.state.time.m}:{this.state.time.s}</span></div>
  )
 }
}

export default Otp;
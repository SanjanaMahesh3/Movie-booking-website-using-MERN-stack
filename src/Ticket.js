import SOP from './SOP.png'
import header from "./header.png"
import './Ticket.css'
import App1 from "./page2"
function Ticket(){
    return(
        <div>
        <img src = {header} width = "1540px" id = "img"/>
        <div className="Hey">
        <h1 className="H1a">Congrats! Your ticket has been booked for Avengers Endgame.<br/>Your ticket has been sent to the registered email</h1>
        <h2>Code:Gj28pSo</h2>
        <h3>Display above code to obtain hard copy of ticket at the theatre</h3>
        <img src={SOP}/>
        <h3>Scan QR code to read more about covid guidelines</h3></div></div>
    )
    }
export default Ticket

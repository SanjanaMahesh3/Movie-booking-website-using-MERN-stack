import React from 'react'
import New_fun from './new';
import App1 from './page2';
import App2 from './page3'
import App3 from './page4'
import App4 from './page5';
import App6 from './page7';
import App7 from './pay_method'
import App8 from './cash'
import App9 from './pay'
import Otp from "./otp_valid"
import Kan from './Kan'
import Ticket from "./Ticket"
import Filter from './filter';
import RecordList from "./recordList"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App(){
    return(
        <div>
        <Router>
          <Routes>
            <Route exact path = "/" element = {<New_fun/>}/>
            <Route exact path ="/App1" element = {<App1/>}/>
            <Route exact path="/App2" element={<App2/>}/>
            <Route exact path="/App3" element={<App3/>}/>
            <Route exact path="/App4" element={<App4/>}/>
            <Route exact path="/App6" element={<App6/>}/>
            <Route exact path="/App7" element={<App7/>}/>
            <Route exact path="/App7" element={<App7/>}/>
            <Route exact path="/App9" element={<App9/>}/>
            <Route exact path="/Kan" element={<Kan/>}/>
            <Route exact path="/Filter" element={<Filter/>}/>
            <Route exact path="/App7/App9" element={<App9/>}/>
            <Route exact path="/App7/App9/Otp" element={<Otp/>}/>
            <Route exact path = "/RecordList" element = {<RecordList/>}/> 
            <Route exact path = "/Ticket" element = {<Ticket/>}/>
          </Routes>
        </Router>
        </div>
    )
}
export default App;

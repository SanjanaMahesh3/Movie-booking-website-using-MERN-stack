import './page7.css';
import header from './header.png'
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import all from './all.png'

class App6 extends React.Component{
  constructor()
  {
    super()
    this.state={color:"green",color1:"green",color2:"green",color3:"green",color4:"green",color5:"green",color6:"green",color7:"green",color8:"green",color9:"green",color10:"green",color11:"green",color12:"green",color13:"green",color14:"green",color15:"green",color16:"green",color17:"green",color18:"green",color19:"green",color20:"green",color21:"green",color22:"green",color23:"green",color24:"green",color25:"green",color26:"green",color27:"green",color28:"green",color29:"green",count:1,price:200}
  }
  counter=()=>
  {
    this.setState(prev=>({count:prev.count+1}))
    this.setState(prev=>({price:prev}))
    alert("Number of seats selected : "+this.state.count + " Price payable: "+this.state.count*200)
  }
  changeColor=()=>{
    this.setState({color:"grey"})
    this.counter()
  }
  changeColor2=()=>{
    this.setState({color2:"grey"})
    this.counter()
  }
  changeColor1=()=>{
    this.setState({color1:"grey"})
    this.counter()
  }
  changeColor3=()=>{
    this.setState({color3:"grey"})
    this.counter()
  }
  changeColor4=()=>{
    this.setState({color4:"grey"})
    this.counter()
  }
  changeColor5=()=>{
    this.setState({color5:"grey"})
    this.counter()
  }
  changeColor6=()=>{
    this.setState({color6:"grey"})
    this.counter()
  }
  changeColor7=()=>{
    this.setState({color7:"grey"})
    this.counter()
  }
  changeColor8=()=>{
    this.setState({color8:"grey"})
    this.counter()
  }
  changeColor9=()=>{
    this.setState({color9:"grey"})
    this.counter()
  }
  changeColor10=()=>{
    this.setState({color10:"grey"})
    this.counter()
  }
  changeColor11=()=>{
    this.setState({color11:"grey"})
    this.counter()
  }
  changeColor12=()=>{
    this.setState({color12:"grey"})
    this.counter()
  }
  changeColor13=()=>{
    this.setState({color13:"grey"})
    this.counter()
  }
  changeColor14=()=>{
    this.setState({color14:"grey"})
    this.counter()
  }
  changeColor15=()=>{
    this.setState({color15:"grey"})
    this.counter()
  }
  changeColor16=()=>{
    this.setState({color16:"grey"})
    this.counter()
  }
  changeColor17=()=>{
    this.setState({color17:"grey"})
    this.counter()
  }
  changeColor18=()=>{
    this.setState({color18:"grey"})
    this.counter()
  }
  changeColor19=()=>{
    this.setState({color19:"grey"})
    this.counter()
  }
  changeColor21=()=>{
    this.setState({color21:"grey"})
    this.counter()
  }
  changeColor22=()=>{
    this.setState({color22:"grey"})
    this.counter()
  }
  changeColor23=()=>{
    this.setState({color23:"grey"})
    this.counter()
  }
  changeColor24=()=>{
    this.setState({color24:"grey"})
    this.counter()
  }
  changeColor25=()=>{
    this.setState({color25:"grey"})
    this.counter()
  }
  changeColor26=()=>{
    this.setState({color26:"grey"})
    this.counter()
  }
  changeColor27=()=>{
    this.setState({color27:"grey"})
    this.counter()
  }
  changeColor28=()=>{
    this.setState({color28:"grey"})
    this.counter()
  }
  changeColor29=()=>{
    this.setState({color29:"grey"})
    this.counter()
  }
  changeColor20=()=>{
    this.setState({color20:"grey"})
    this.counter()
  }
  alert=()=>{
    alert('Cannot select seats that are not available')
  }
  render()
  {
  return (
    <div><img src = {header} width = "1540px" id = "img"/>
    <h1 id="H1">Seat Details</h1>
    <h4 id="H4">VIP BOX Rs.200</h4>
    <p className="P1">C
    <span id="E1"><button id="VC14" style={{"backgroundColor":"red"}} onClick={this.alert}>14</button></span>
    <span id="E2"><button id="VC13" style={{backgroundColor:this.state.color}} onClick={this.changeColor}>13</button></span>
    <span id="E3"><button id="VC12" style={{backgroundColor:this.state.color1}} onClick={this.changeColor1}>12</button></span>
    <span id="E4"><button id="VC11" style={{backgroundColor:this.state.color2}} onClick={this.changeColor2}>11</button></span>
    <span id="E5"><button id="VC10" style={{"backgroundColor":"red"}} onClick={this.alert} >10</button></span>
    <span id="E6"><button id="VC9" style={{backgroundColor:this.state.color3}} onClick={this.changeColor3}>9</button></span>
    <span id="E7"><button id="VC8" style={{"backgroundColor":"red"}} onClick={this.alert}>8</button></span>
    <span id="E9"><button id="VC7" style={{"backgroundColor":"red"}}  onClick={this.alert}>7</button></span>
    <span id="E10"><button id="VC6" style={{"backgroundColor":"red"}}  onClick={this.alert}>6</button></span>
    <span id="E11"><button id="VC5" style={{"backgroundColor":"red"}} onClick={this.alert}>5</button></span>
    <span id="E12"><button id="VC4" style={{"backgroundColor":"red"}}  onClick={this.alert}>4</button></span>
    <span id="E13"><button id="VC3" style={{"backgroundColor":"red"}}  onClick={this.alert}>3</button></span>
    <span id="E14"><button id="VC2" style={{"backgroundColor":"red"}}  onClick={this.alert}>2</button></span>
    <span id="E15"><button id="VC1" style={{"backgroundColor":"#cfab40"}}>Row 3</button></span>
    </p>
    <p id="P2">B
    <span id="D1"><button id="VB14" style={{"backgroundColor":"red"}} onClick={this.alert}>14</button></span>
    <span id="D2"><button id="VB13" style={{backgroundColor:this.state.color4}} onClick={this.changeColor4}>13</button></span>
    <span id="D3"><button id="VB12" style={{backgroundColor:this.state.color5}} onClick={this.changeColor5}>12</button></span>
    <span id="D4"><button id="VB11" style={{backgroundColor:this.state.color6}} onClick={this.changeColor6}>11</button></span>
    <span id="D5"><button id="VB10" style={{backgroundColor:this.state.color7}} onClick={this.changeColor7}>10</button></span>
    <span id="D6"><button id="VB9" style={{backgroundColor:this.state.color8}} onClick={this.changeColor8}>9</button></span>
    <span id="D7"><button id="VB8" style={{"backgroundColor":"red"}}  onClick={this.alert}>8</button></span>
    <span id="D8"><button id="VB7" style={{"backgroundColor":"red"}} onClick={this.alert} >7</button></span>
    <span id="D9"><button id="VB6" style={{"backgroundColor":"red"}} onClick={this.alert}>6</button></span>
    <span id="D10"><button id="VB5" style={{"backgroundColor":"red"}} onClick={this.alert} >5</button></span>
    <span id="D11"><button id="VB4" style={{"backgroundColor":"red"}}  onClick={this.alert}>4</button></span>
    <span id="D12"><button id="VB3" style={{"backgroundColor":"red"}}  onClick={this.alert} >3</button></span>
    <span id="D13"><button id="VB2" style={{backgroundColor:this.state.color9}} onClick={this.changeColor9}>2</button></span>
    <span id="D14"><button id="VB1" style={{"backgroundColor":"#cfab40"}}>Row 2</button></span>
    </p>
    <p id="P3">A
    <span id="A1"><button id="VA14" style={{backgroundColor:this.state.color10}} onClick={this.changeColor10}>14</button></span>
    <span id="A2"><button id="VA13" style={{backgroundColor:this.state.color11}} onClick={this.changeColor11}>13</button></span>
    <span id="A3"><button id="VA12" style={{backgroundColor:this.state.color12}} onClick={this.changeColor12}>12</button></span>
    <span id="A4"><button id="VA11" style={{"backgroundColor":"red"}}  onClick={this.alert}>11</button></span>
    <span id="A5"><button id="VA10" style={{"backgroundColor":"red"}}   onClick={this.alert}>10</button></span>
    <span id="A6"><button id="VA9" style={{backgroundColor:this.state.color13}} onClick={this.changeColor13}>9</button></span>
    <span id="A7"><button id="VA8" style={{backgroundColor:this.state.color14}} onClick={this.changeColor14}>8</button></span>
    <span id="A8"><button id="VA7" style={{"backgroundColor":"red"}}  onClick={this.alert}>7</button></span>
    <span id="A9"><button id="VA6" style={{"backgroundColor":"red"}}  onClick={this.alert}>6</button></span>
    <span id="A10"><button id="VA5" style={{"backgroundColor":"red"}}  onClick={this.alert}>5</button></span>
    <span id="A11"><button id="VA4" style={{"backgroundColor":"red"}}  onClick={this.alert}>4</button></span>
    <span id="A12"><button id="VA3" style={{"backgroundColor":"red"}}  onClick={this.alert}>3</button></span>
    <span id="A13"><button id="VA2" style={{"backgroundColor":"red"}}   onClick={this.alert}>2</button></span>
    <span id="A14"><button id="VA1" style={{"backgroundColor":"#cfab40"}} >Row 1</button></span>
    </p>
    <h4 id="H4a">SILVER CLASS Rs.200</h4>
    <p id="P4">B
    <span id="C1"><button id="BI14" style={{backgroundColor:this.state.color15}} onClick={this.changeColor15}>14</button></span>
    <span id="C2"><button id="BI13" style={{"backgroundColor":"red"}}  onClick={this.alert} >13</button></span>
    <span id="C3"><button id="BI12" style={{backgroundColor:this.state.color16}} onClick={this.changeColor16}>12</button></span>
    <span id="C4"><button id="BI11" style={{"backgroundColor":"red"}}   onClick={this.alert}>11</button></span>
    <span id="C5"><button id="BI10" style={{backgroundColor:this.state.color17}} onClick={this.changeColor17}>10</button></span>
    <span id="C6"><button id="BI9" style={{backgroundColor:this.state.color18}} onClick={this.changeColor18}>9</button></span>
    <span id="C7"><button id="BI8" style={{backgroundColor:this.state.color19}} onClick={this.changeColor19}>8</button></span>
    <span id="C8"><button id="BI7" style={{"backgroundColor":"red"}}  onClick={this.alert}>7</button></span>
    <span id="C9"><button id="BI6" style={{"backgroundColor":"red"}}  onClick={this.alert}>6</button></span>
    <span id="C10"><button id="BI5" style={{"backgroundColor":"red"}}  onClick={this.alert}>5</button></span>
    <span id="C11"><button id="BI4" style={{"backgroundColor":"red"}}  onClick={this.alert}>4</button></span>
    <span id="C12"><button id="BI3" style={{"backgroundColor":"red"}}  onClick={this.alert}>3</button></span>
    <span id="C13"><button id="BI2" style={{"backgroundColor":"red"}}   onClick={this.alert}>2</button></span>
    <span id="C14"><button id="BI1" style={{"backgroundColor":"#cfab40"}}>Row 2</button></span>
    </p>
    <p id="P5">A
    <span id="B1"><button id="AI14" style={{backgroundColor:this.state.color20}}onClick={this.changeColor20}>14</button></span>
    <span id="B2"><button id="AI13" style={{backgroundColor:this.state.color21}} onClick={this.changeColor21}>13</button></span>
    <span id="B3"><button id="AI12" style={{backgroundColor:this.state.color23}} onClick={this.changeColor23}>12</button></span>
    <span id="B4"><button id="AI11" style={{backgroundColor:this.state.color24}} onClick={this.changeColor24}>11</button></span>
    <span id="B5"><button id="AI10" style={{"backgroundColor":"red"}}  onClick={this.alert}>10</button></span>
    <span id="B6"><button id="AI9" style={{"backgroundColor":"red"}}  onClick={this.alert} >9</button></span>
    <span id="B7"><button id="AI8" style={{backgroundColor:this.state.color25}} onClick={this.changeColor25}>8</button></span>
    <span id="B8"><button id="AI7" style={{backgroundColor:this.state.color26}} onClick={this.changeColor26}>7</button></span>
    <span id="B9"><button id="AI6" style={{backgroundColor:this.state.color27}} onClick={this.changeColor27}>6</button></span>
    <span id="B10"><button id="AI5" style={{"backgroundColor":"red"}}  onClick={this.alert}>5</button></span>
    <span id="B11"><button id="AI4" style={{backgroundColor:this.state.color28}} onClick={this.changeColor28}>4</button></span>
    <span id="B12"><button id="AI3" style={{backgroundColor:this.state.color29}} onClick={this.changeColor29}>3</button></span>
    <span id="B13"><button id="AI2" style={{backgroundColor:this.state.color22}} onClick={this.changeColor22}>2</button></span>
    <span id="B14"><button id="AI1" style={{"backgroundColor":"#cfab40"}} >Row 1</button></span>
    </p>
    <div><img id="Im" src={all}/></div>
    <div className="That">
    <span><button id="W1" style={{backgroundColor:"red"}}>Booked Seats</button></span>
    <span><button id="W2" style={{backgroundColor:"green"}}>Available Seats</button></span>
      <span><button id="W3" style={{backgroundColor:"#757061"}}>Selected Seats</button></span>
      </div>
      <div className="Ay">
        <nav>
      <Link to = "/App7">Next</Link> 
         </nav>
      </div>
    </div>
   
  )
  }
}


export default App6;
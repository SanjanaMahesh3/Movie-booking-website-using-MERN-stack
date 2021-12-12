import './filter.css';
import header from './header.png'
import {Link} from 'react-router-dom';

function Filter(){
    return(<div><img src = {header} width = "1540px" id = "img"/>
        <h1 className="H1">Hello,What would you love to watch today?</h1>
        <h2 className="H2">Language</h2>
        <div className="Eng">
        <nav>
   <Link  to = "/App3"><button>English</button></Link> 
  </nav></div>
  <div className="Kan">
        <nav>
   <Link  to = "/Kan"><button>Kannada</button></Link> 
  </nav></div>
  <div className="Tam">
   <button>Tamil</button></div>
  <div className="Tel">
   <button>Telugu</button>
  </div>
  <div className="Mal">
  
   <button>Malayalam</button>
  </div>
</div>)
}
export default Filter
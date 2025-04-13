import { Component } from "react";

import "./index.css"

class Header extends Component{
  render(){
    return <nav className="main">
       
            <img src="logo1.png" alt="img1" className="imgs padds" />
            <input type="search" placeholder="Search..."  className="searchBar" />
        
            <img src="message.png"  alt="img2"  className="imges paddy" />
            <img src="bell.png"  alt="img3"  className="imges padd" />
            <img  alt="img4"  src="https://thumbs.dreamstime.com/b/letter-r-logo-symbol-green-circle-impact-font-white-background-isolation-211787262.jpg"  className="imges padd" />
            <select className="drop-down">
                <option>Randhir Kumar</option>
            </select>
       
        
        

    </nav>
  }
}

export default Header;

import React from "react";
import './Header.css';

const Header = ()=>{
 return(
   <div className="header">
        <div className="left">
         <i className="fa-solid fa-bars"></i>
       <h4>Golden Corral
            <i className="fa-solid fa-right-long"></i> Anderson</h4>        
        </div>
        <div className="right">
          
          <i className="fa-solid fa-wifi"></i>
       <p>FILTER</p>
       <i className="fa-solid fa-magnifying-glass"></i>
       
        </div>
       
       

   </div>

 )
}
export default Header;
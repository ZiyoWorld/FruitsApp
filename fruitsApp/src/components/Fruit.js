import React from "react";
import './Fruit.css';

const Fruit = (props)=>{
     return(
       <div className="main">
         
         <div className="pictures">
          <img src={props.data.imgUrl} width="100%" alt="" height="100%"></img>
         </div>
         <div className="details">
           <div className="top">
             <h1>{props.data.title}</h1>
             <button className="button">Add</button>
             </div>
           <div className="bottom">
             <div className="data">
               <p className="title">UOM</p>
               <p className="value">{props.data.uom}</p>
             </div>
             <div className="data">
               <p className="title">Pask Size</p>
               <p className="value">{props.data.size}</p>
             </div>
             <div className="data">
               <p className="title">Per Unit</p>
               <p className="value">{props.data.unit}</p>
             </div>
             <div className="data">
               <p className="title">Total</p>
               <p className="value">{props.data.total}</p>
             </div>
             </div>

         </div>
          

       </div>

     )
}
export default Fruit;
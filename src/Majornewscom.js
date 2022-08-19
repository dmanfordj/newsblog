import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

//image imports
import pix from './UG.jpg';


// set up the new prop here
export default function Newstest() {
  let badgeText="Education" ;
  // if (prop.DayofPost==="Today"){
  //     badgeText="Latest" 
  // }else {
  //     badgeText=prop.Newstype
  // }
   
    return (
        <div className="news-item-css">
           <div className='card--badge'>{badgeText}</div>  
          <img src={pix} alt="imageo" className='news-img-css'/>
          <div className="news-item-caption">
           Ug Lecturers rated best in Ghana
         </div>
        </div>
    )

}
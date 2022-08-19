import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import presby from './PresbyU.jpeg';

// set up the new prop here
export default function Newstest2() {
  let badgeText="Education" ;
        // if (prop.DayofPost==="Today"){
        //     badgeText="Latest" 
        // }else {
        //     badgeText=prop.Newstype
        // }
   
    return (
        <div className="news-item-minor-css">
        <div className='card--badge'>{badgeText}</div>   
          <img src={presby} alt="Presby U" className='news-img-css'/>
          <div className="news-item-caption">
           Presby University gets New Rector
         </div>
        </div>
    )

}
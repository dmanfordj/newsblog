import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import presby from './PresbyU.jpeg';

// set up the new prop here
export default function Newstest2() {

   
    return (
        <div className="news-item-minor-css">
            
          <img src={presby} alt="Presby U" className='news-img-css'/>
          <div className="news-item-caption">
           Presby University get New Rector
         </div>
        </div>
    )

}
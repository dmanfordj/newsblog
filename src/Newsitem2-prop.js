import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


// set up the new prop here
export default function NewsItem2(prop) {

   
    return (
        <div className="news-item-minor-css">
            
          <img src={prop.Image} alt="image"/>
          <span className="news-item-caption">
            {prop.Caption}
         </span>
        </div>
    )

}
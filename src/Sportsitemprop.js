import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


// set up the new prop here
export default function Sportsitem(prop) {

   
    return (
        <div className="sports--news--item-css">
            
          <img src={prop.Image} alt="image2" className='news-img-css'/>
          <div className="news-item-caption">
           {prop.Caption}
         </div>
        </div>
    )

}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


// set up the new prop here
export default function Entertainment(prop) {

   
    return (
        <div className="news--item--css-half">
            
          <img src={prop.Image} alt="image2" className='news-img-css'/>

          <div className="news-item-caption">
           {prop.Caption}
         </div>
        </div>
    )

}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

//image imports
import pix from './UG.jpg';


// set up the new prop here
export default function Newstest() {

   
    return (
        <div className="news-item-css">
            
          <img src={pix} alt="imageo" className='news-img-css'/>
          <div className="news-item-caption">
           Ug Lecturers rated best in Ghana
         </div>
        </div>
    )

}
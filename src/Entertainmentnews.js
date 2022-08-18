import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import Entertainment from './Entertainmentprop';
import pic1 from './image/King-Sark.jpg';
import pic2 from './image/Opiesie.jpg' ;

//import sports2 from '';


// set up the new prop here
export default function EntertainmentNews() {

            
    return (
        <div className= "sports--news--css">
         
        <Entertainment
        Image={pic1}
        Caption="Sarkodie picks up Grammy"
        />

        <Entertainment
        
        Image={pic2}
        Caption="Opiesie`s Track goes global"
        />
        
        
        </div>
    )

}
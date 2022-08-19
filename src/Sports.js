import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import Sportsitem from './Sportsitemprop';
import sports1 from './image/blackstars.jpg';
import sports2 from './image/Basketball.jpg';
import sports3 from './image/Sport3.jpg';
//import sports2 from '';


// set up the new prop here
export default function SportsNews() {

            
    return (
        <div className="sports--news--css">
         <Sportsitem
         Image={sports1}
         DayofPost="Today"
         Caption="Ghana Makes History in FIFA World Cup"
         Newstype="Sports"
              
         />   

        <Sportsitem
         Image={sports2}

         Caption="Basketball Legend Visits Ghana"
         DayofPost="Today"  
         Newstype="Sports"  
         />  

        <Sportsitem
         Image={sports3}
         Caption="Athletics Ghana Gets Big Deal with Addidas"
         DayofPost="Today"  
         Newstype="Sports"   
         />  
        
        </div>
    )

}
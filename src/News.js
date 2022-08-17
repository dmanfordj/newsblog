import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import Newstest from './Majornewscom';
import Newstest2 from './Minornewscomp';

// set up the new prop here
export default function News() {

   
    return (
        <div className="news--css">
         <Newstest/>   
         <Newstest2/>
        </div>
    )

}
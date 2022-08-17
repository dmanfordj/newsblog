import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

import News from './News';
import SportsNews from './Sports';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <News/>
  <SportsNews/>
 
 
 </>
);



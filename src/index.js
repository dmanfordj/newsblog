import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Headingprop from './Newsheader';

import News from './News';
import SportsNews from './Sports';
import EntertainmentNews from './Entertainmentnews';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
<Headingprop
  caption="Education"/>
  <News/>
  <Headingprop
  caption="Sports"/>
  <SportsNews/>
  <Headingprop
  caption="Entertainment"/>
  <EntertainmentNews/>
 
 
 </>
);



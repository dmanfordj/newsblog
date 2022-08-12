import React from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

export default function Navbar() {

   
    return (
        <div className='navbar--css'>
        <nav class="navbar bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="www.123.com.gh">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )

}
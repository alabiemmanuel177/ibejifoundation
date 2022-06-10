import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      </div>
      <div className="navbar-btn">
        <Link to="/" className="Nlink"><a>Home</a></Link>
        <Link to="/aboutus" className="Nlink"><a>About Us</a></Link>
        <Link to="/thefoundation" className="Nlink" ><a>The Foundation</a></Link>
        <Link to="/project" className="Nlink"><a>Project</a></Link>
        <div className="dropdown">
        <Link to="#" className=" dropbtn hamburger"><a><GiHamburgerMenu/></a></Link>
       <div className="dropdown-content">
       <Link to="/" className="Nlink"><a>Home</a></Link>
       <Link to="/aboutus" className="Nlink"><a>About Us</a></Link>
       <Link to="/thefoundation" className="Nlink" ><a>The Foundation</a></Link>
       <Link to="/project" className="Nlink"><a>Project</a></Link>
   </div>
</div>
      </div>
    </div>
  )
}

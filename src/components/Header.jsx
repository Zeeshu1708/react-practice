import React from 'react'
import "../style/Header.css";
import { Link } from "react-router-dom";


const Header = () => { 
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header

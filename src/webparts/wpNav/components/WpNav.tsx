import * as React from 'react';
import type { IWpNavProps } from './IWpNavProps';
import { useState } from 'react';
require("../assets/Css/style.css");
import MenuButton from './MenuButton'; //importación de componente.

const WpNav: React.FC<IWpNavProps> = ({}) =>{

  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };
    
  return (
    <div className="header-container">
      <div className="header-wrap">
        <nav className={`navbar ${open ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <MenuButton open={open} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default WpNav;
import * as React from 'react';
import MenuButtonProps from '../../../interfaces/I_NavBar';

const MenuButton: React.FC<MenuButtonProps> = ({ open, handleClick }) => {
    return (
      <button className={`menu-button ${open ? "open" : ""}`} onClick={handleClick}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>
    );
  };

export default MenuButton;
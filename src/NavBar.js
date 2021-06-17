import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
        <NavLink to = '/barchart'>BarChart</NavLink>
        <NavLink to = '/example'>Scene</NavLink>
        <NavLink to = '/tree'>Tree</NavLink>
    </div>
  )
}

export default NavBar;
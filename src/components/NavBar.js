import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
  <div>
    <NavLink
        exact to="/actors"style={link}  activeStyle={{
            background: "darkblue",
          }}>
        Actors
    </NavLink>

    <NavLink
        exact to="/movies"style={link}  activeStyle={{
            background: "darkblue",
          }}>
        Movies
    </NavLink>

    <NavLink
        exact to="/directors"style={link}  activeStyle={{
            background: "darkblue",
          }}>
        Directors
    </NavLink>

    <NavLink
        exact to="/home"style={link}  activeStyle={{
            background: "darkblue",
          }}>
        Home
      </NavLink>
  </div>
  );
};

export default NavBar;

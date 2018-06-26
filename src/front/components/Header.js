import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
      <div className="component-header">
        <h1>
          {props.title}
        </h1>
        <ul>
          <li><NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink></li>
          <li><NavLink to="/home" activeClassName="isActive" exact={true}>Home</NavLink></li>
          <li><NavLink to="/add" activeClassName="isActive">Add</NavLink></li>
          <li><NavLink to="/about" activeClassName="isActive">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="isActive">Contact</NavLink></li>
          <li><NavLink to="/404" activeClassName="isActive">404</NavLink></li>
        </ul>
        <hr/>
      </div>
  )
}



Header.defaultProps = {
  title: 'Todo app !!!!!!!!!!!',
  subtitle: 'Subtitle of the app'
};

export default Header;
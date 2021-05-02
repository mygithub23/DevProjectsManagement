import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>This is the header</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/manage" activeClassName="is-active" exact={true}> ----- Manage ----- </NavLink>
    <NavLink to="/project" activeClassName="is-active" exact={true}> ----- Project ----- </NavLink>
    <NavLink to="/developer" activeClassName="is-active" exact={true}> ----- Developer ----- </NavLink>
    <NavLink to="/stack" activeClassName="is-active" exact={true}> ----- Technology Stacks ----- </NavLink>
    <NavLink to="/contact" activeClassName="is-active"> ----- Contact ----- </NavLink>
  </header>
);

export default Header;

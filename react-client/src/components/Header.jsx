import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
	<nav className="navbar navbar-fixed-top">
  <div >
		<ul id='HNA'>
		<li id='Na'><NavLink to = "/" activeClassName = "is-active" exact = {true}>Home</NavLink></li>
		<li id='Na'><NavLink to = "/jobsForm" activeClassName = "is-active" >Add Job</NavLink></li>
		<li className="nav navbar-nav pull-right" id='Na'><NavLink to = "/login" activeClassName = "is-active" >Login</NavLink></li>
		<li className="nav navbar-nav pull-right" id='Na'><NavLink to = "/signup" activeClassName = "is-active" >Sign up</NavLink></li>
		</ul>
	 </div>
</nav>
	);

export default NavBar;
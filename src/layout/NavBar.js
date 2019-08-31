import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar({menus}) {
	const [isOpen, setIsOpen] = useState(false);	
	function openOrClose(e) {
		setIsOpen(!isOpen);
	}
    return (                
        <nav id="top" className="nav navbar has-shadow" role="navigation" aria-label="main navigation">
		<div className="container">
		  <div className="navbar-brand">
		    <a className="navbar-item" href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">
				<img src="logo192.png" alt="" height="20"/>
		    </a>
		    <a role="button" onClick={openOrClose} className={isOpen?'navbar-burger burger is-active':'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navMenu">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
		  <div id="navMenu" onClick={openOrClose} className={isOpen?'navbar-menu is-active':'navbar-menu'}>
		    <div className="navbar-start">
            {menus.map((item, index) => (                
                <Link key={index} to={item.link} className="navbar-item">{item.text}</Link>                
            ))} 	      
		    </div>
		  </div>
	  	</div>
	</nav>	
    );
}
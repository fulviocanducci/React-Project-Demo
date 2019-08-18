import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { Menus } from './index';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Project Demo ReactJs</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">                
                        {Menus.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link} className="nav-link">{item.text}</Link>
                            </li>
                        ))}                  
                    </ul>               
                    </div>
                </div>            
            </nav>
            <Switch> 
                {Menus.map((item ,index)=> (<Route key={index} exact path={item.link} component={item.component} />))}
            </Switch>
        </>
    );
}
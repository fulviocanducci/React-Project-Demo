import React from 'react';
import { Switch, Route } from "react-router-dom";

export default function Container({menus}) {
    return (
        <>
            <section className="section">
                <div className="container">
                    <Switch> 
                        {menus.map((item ,index)=> (<Route key={index} exact path={item.link} component={item.component} />))}
                    </Switch>          
                </div>       
            </section>
        </>
    );
}
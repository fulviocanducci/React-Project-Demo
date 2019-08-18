import React from 'react';

export default function Container({title, children}) {
    return (
        <div className="container">      
            <div className="jumbotron">
                <h1>{title || "undefined"}</h1>
                <hr/>
                {children}
            </div>
        </div>
    );
}
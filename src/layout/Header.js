import React from 'react';

export default function Header({title}) {
    return (
        <>
            <h1 className="title">{title}</h1>
            <hr />
        </>
    )
}
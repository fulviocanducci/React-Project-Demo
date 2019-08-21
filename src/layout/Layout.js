import React from 'react';
import { NavBar, Menus, Container, Footer } from './index';

export default function Layout() {
    return (        
        <>
            <NavBar menus={Menus} />
            <Container menus={Menus} />
            <Footer />
        </>
    );
}
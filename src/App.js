import React from 'react';
import Navbar from './layout/NavBar';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from './layout';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
    </BrowserRouter>
  );
}

export default App;

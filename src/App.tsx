import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Period from './components/Period';
import Subject from './components/subject';

const App: React.FunctionComponent = () => {


  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Period />} />
          <Route path="/Subject" element={<Subject />} />
        </ Routes>
      </BrowserRouter>
     </div>
  )
}

export default App;

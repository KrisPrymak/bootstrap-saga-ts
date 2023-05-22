import React from 'react';
import Navibar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<div>mainpage</div>}/>
        <Route path='/aboutMe' element={<div>aboutMe</div>}/>
        <Route path='/userPage' element={<div>userPage</div>}/>
      </Routes>
    </>
  );
}

export default App;

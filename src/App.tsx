import React from 'react';
import Navibar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import UserPage from './components/UserPage';

function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/userPage/:userId' element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;

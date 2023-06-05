import React from 'react';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from './components/Navibar';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import UserPage from './components/UserPage';

function App() {

  // const hi = 'hi';
  // console.log(hi);
  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/userPage/:userId" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;

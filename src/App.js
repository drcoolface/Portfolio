
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Research from './components/About';
// import TicTacToe from './components/TicTacToe';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    sdsdsds
      </> 
  );
}

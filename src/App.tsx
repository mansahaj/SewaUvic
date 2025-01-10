import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.tsx';
import Home from './components/home/home.tsx';
import ContactScren from './pages/ContactScreen/ContactScreen.tsx';
import OurTeamScren from './pages/OurTeamScreen.tsx';
import EventScreen from './pages/EventScreen/EventScreen.tsx';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactScren />} />
        <Route path="/our-team" element={<OurTeamScren />} />
        <Route path="/events" element={<EventScreen />} />
      </Routes>
      
    </div>
  );
};

export default App;


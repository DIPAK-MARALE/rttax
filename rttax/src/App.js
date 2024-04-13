import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes/Routes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Render NavBar only on specific routes */}
        <Route path="/" element={<NavBar />} />
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;

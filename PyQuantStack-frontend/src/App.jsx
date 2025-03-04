import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TimeSeries from './components/TimeSeries';
import Derivatives from './components/Derivatives';
import Backtest from './components/Backtest';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/timeseries" element={<TimeSeries />} />
          <Route path="/derivatives" element={<Derivatives />} />
          <Route path="/backtest" element={<Backtest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

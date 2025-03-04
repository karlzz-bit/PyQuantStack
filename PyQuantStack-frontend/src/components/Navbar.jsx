import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    padding: '10px 20px',
    backgroundColor: '#001529',
    display: 'flex',
    alignItems: 'center',
    color: '#fff'
  };

  const linkStyle = {
    color: '#fff',
    marginRight: '20px',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ marginRight: '40px' }}>PyQuantStack</h2>
      <Link to="/" style={linkStyle}>数据总览</Link>
      <Link to="/timeseries" style={linkStyle}>时间序列处理</Link>
      <Link to="/derivatives" style={linkStyle}>衍生品分析</Link>
      <Link to="/backtest" style={linkStyle}>策略回测</Link>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import logo from './logo.png';
import './index.css';

export default () => {
  return (
    <div className="layout">
      <div className="title">Hello World!</div>
      <div className="desc">snowpack 初尝试，学习和实践；</div>
      <img src={logo} />
    </div>
  );
};

import React from 'react';
import { isString } from 'lodash';
import logo from './logo.png';
import './App.css';

const title = "I'm Coyeah. This is my try!";

export default () => {
  return (
    <>
      <div className="layout">
        <div className="title">{isString(title) ? title : 'Hello World!'}</div>
        <div className="desc">snowpack 初尝试，学习和实践；</div>
        <img src={logo} />
      </div>
    </>
  );
};

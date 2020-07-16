import React, { useState } from 'react';
import _ from 'lodash-es';
// import _ from '/web_modules/lodash-es';
import logo from './logo.png';
import './index.css';

export default () => {
  const [number] = useState(null);

  return (
    <>
      <div className="layout">
        <div className="title">Hello World!</div>
        <div className="desc">snowpack 初尝试，学习和实践；</div>
        <img src={logo} />
      </div>
      <div>
        <div>{_.isNull(number) ? '--' : number}</div>
      </div>
    </>
  );
};

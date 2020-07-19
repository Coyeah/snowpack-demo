import React from 'react';
import { isString } from 'lodash-es';
import logo from './logo.png';
import './App.css';

class Store {
  public title: string = '';
  public desc: string = '';
  constructor({ title, desc }: { title?: string; desc?: string }) {
    this.title = isString(title) ? title : 'Hello World!';
    this.desc = isString(desc) ? desc : '';
  }
}

const store = new Store({
  desc: 'snowpack 初尝试，学习和实践；',
});

export default () => {
  return (
    <>
      <div className="layout">
        <div className="title">{store.title}</div>
        <div className="desc">{store.desc}</div>
        <img src={logo} />
      </div>
    </>
  );
};

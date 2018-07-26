import React, { Component } from 'react';
import HeaderBar from './headerBar';

class HeaderWrapper extends Component {
  render() {
    return [
      <div className='header-wrapper'>
          <h1 className='header-wrapper__title'>Welcome to HOA manager!</h1>
          <p className='header-wrapper__subtitle'>Please log in to continue</p>
          {this.props.children}
      </div>,
      HeaderBar()
    ]
  }
}

export default HeaderWrapper;

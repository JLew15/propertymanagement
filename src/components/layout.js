import React, { Component } from 'react';
import HeaderBar from './headerBar';

function Header() {
  return (
    <div className='header-wrapper'>
      <h1 classname='header-wrapper__title'>Welcome to HOA Manager!</h1>
      <p className='header-wrapper__subtitle'>Please login to continue</p>
    </div>
  )
}

class Layout extends Component {
  render() {
    return (
      <div>

          {HeaderBar()}
          {this.props.children}
      </div>
    )
  }
}

export default Layout;

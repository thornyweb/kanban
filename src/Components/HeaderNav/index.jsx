import React from 'react';

export default class HeaderNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-lg'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link'>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

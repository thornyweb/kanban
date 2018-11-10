import React from 'react';
import './styles.scss';

export default class HeaderNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-md bg-secondary'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon' />
            Menu
          </button>
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

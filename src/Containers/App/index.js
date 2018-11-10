import React, { Component } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <div className='container'>
          <h1 className='TestClass'>Kanban</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

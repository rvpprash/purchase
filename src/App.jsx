import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';

class App extends Component {
  render() {
    return (
      <div id='PurchaseSummaryApp' className="purchaseSummary raisedbox">
        <Summary />
      </div>
    );
  }
}

export default App;

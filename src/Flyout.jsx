import React, { Component } from 'react';
import './Flyout.css';

class Flyout extends Component {
  render() {
    var isVisible = "hide";

    if (this.props.visibility) {
      isVisible = "show";
    }

    return (
      <div id='flyoutPopover' onMouseDown={this.props.handleMouseDown} className={isVisible}>
        Picking up your order in the store helps cut costs, and we pass the savings on to you.
      </div>
    );
  }
}

export default Flyout;

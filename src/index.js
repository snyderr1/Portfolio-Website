import React from 'react';
import ReactDOM from 'react-dom';
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';

function Button(props) {
  return (
    <button className="gen-button" onClick={props.onClick}>
     {props.value}
    </button>
  );
}


class NavBar extends React.Component {
  renderButton(i) {
    return (
      <Button
        value={i}
      />
    );
  }

  render() {
    return (
        <div className="nav-bar">
          {this.renderButton(1)}
          {this.renderButton(1)}
          {this.renderButton(2)}
        </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.bar,
      title: "Ross Snyder"
    };
  }
  render
  render() {
    const current = this.state.navigation;
    return (
        <div className="Page">
          <h1>{this.state.title}</h1>
          <NavBar /> 
        </div>
    );
  }
}

// ========================================

ReactDOM.render(<Page bar={Array(3).fill(0, 2)} />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';

function Button(props) {
  return (
    <button className="gen-button" onClick={props.clickEvent} value={props.val}>
     {props.val}
    </button>
  );
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  renderButton(i, id, event) {
    return (
      <Button key={id}
        val={i} 
        clickEvent={event}
      />
    );
  }

  handleClick(e){
    console.log(e.target.value);
  }

  render() {
    const current = this.props.navigation;
    return (
        <div className="nav-bar">
          {current.map((button, index) => 
          this.renderButton(current[index], index, this.handleClick))}
        </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ross Snyder",
      navigation: ["Home", "Projects", "About Me", "More"]
    };
  }


  render() {
    return (
        <div className="Page">
          <h1>{this.state.title}</h1>
          <NavBar 
          navigation={this.state.navigation}
          /> 
        </div>
    );
  }
}

// ========================================

ReactDOM.render(<Page  />, document.getElementById("root"));

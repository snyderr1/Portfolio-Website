import React from 'react';
import ReactDOM from 'react-dom';
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';

function Button(props) {
  return (
    <button className="gen-button" onClick={props.clickEvent} value={props.val} onMouseEnter={props.onHover} onMouseLeave={props.exitHover}>
     {props.val}
    </button>
  );
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeStyle = this.onHover.bind(this);
    this.revertStyle = this.exitHover.bind(this);
  }


  renderButton(i, id, event, interact, exit) {
    return (
      <Button key={id}
        val={i} 
        clickEvent={event}
        onHover={interact}
        exitHover={exit}
      />
    );
  }

  onHover(e){
    e.target.style.color = 'yellow';
  }
  exitHover(e){
    e.target.style.color = 'white';
    console.log("?");
  }

  handleClick(e){
    this.props.changePage(e.target.value);
  }

  render() {
    const current = this.props.navigation;
    return (
        <div className="nav-bar">
          {current.map((button, index) => 
          this.renderButton(current[index], index, this.handleClick, this.changeStyle, this.revertStyle))}
        </div>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    
  }

  render() {
    return (
        <div className="page-content">
          <img className="mainimg" src={this.props.source} alt={this.props.alt}></img>
        </div>
    );
  }
}
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
    this.state = {
      title: "Ross Snyder",
      navigation: ["Home", "Projects", "About", "More"]
    };
  }
  changePage(nTitle){
    var old = this.state;
    if(nTitle === "Home"){
      nTitle = "Ross Snyder";
    }
    this.setState({
      title: nTitle,
      navigation: old.navigation
    });
  }

  render() {
    return (
        <div className="Page">
          <h1>{this.state.title}</h1>
          <NavBar 
          navigation={this.state.navigation}
          changePage={this.changePage}
          /> 
          <Content source={this.state.title + ".jpg"} alt={this.state.title}/>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(<Page  />, document.getElementById("root"));

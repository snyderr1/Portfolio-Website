import React, { useEffect, useState } from "react";
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';

function Button(props) {
  return (
    <button className="gen-button" onClick={props.clickEvent} value={props.val} onMouseEnter={props.onHover} onMouseLeave={props.exitHover}>
      {props.val}
    </button>
  );
}

function NavBar(props){

  const current = props.navigation;
  function renderButton(i, id, event, interact, exit) {
    return (
      <Button key={id}
        val={i} 
        clickEvent={event}
        onHover={interact}
        exitHover={exit}
      />
    );
  }

  function onHover(e){
    e.target.style.color = 'rgb(64, 116, 76)';
    e.target.style.background = 'rgba(150, 185, 55, 0.2)';
    e.target.style.transform = 'scale(1.5, 1)';
    e.target.style.textTransform= 'full-width';
  }
  function exitHover(e){
    e.target.style.color = 'white';
    e.target.style.background = '#ffffff00';
    e.target.style.transform = 'scale(1, 1)';
    e.target.style.textTransform= 'None';
    
  }

  function handleClick(e){
    props.changePage(e.target.value);
  }

  return(
    
      <div className="nav-bar">
        {current.map((button, index) => 
        renderButton(current[index], index, handleClick, props.changeStyle, props.revertStyle))}
      </div>
    );
}

function Content(props){
    return (
      <div className="page-content">
        <img className="mainimg" src={props.source} alt={props.alt}></img>
      </div>
    );
}

function Page(props) {
  const initialState = {
    title: "Ross Snyder",
    navigation: ["Home", "Projects", "About", "More"]
  }
  const [state, setState] = useState(initialState);
  

  function changePage(nTitle){
    const old = state;
    if(nTitle === "Home"){
      nTitle = "Ross Snyder";
    }
    setState({
      title: nTitle,
      navigation: old.navigation
    });
  }

    return (
        <div className="Page">
          <h1>{state.title}</h1>
          <NavBar 
          navigation={state.navigation}
          changePage={changePage}
          /> 
          <Content source={state.title + ".jpg"} alt={state.title}/>
        </div>
    );
}

function App() {
  return (
    <Page />
  );
}

export default App;

import React, { useEffect, useState, useRef, useLayoutEffect} from "react";
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';
//CONTENT TEMPLATES

//MAIN PAGE TEMPLATE CODE BELOW
function Button(props) {
  const [status, setStatus] = useState("gen-button"); 

  function onHover(e){
    setStatus("hover-button")
  }
  function exitHover(e){
    setStatus("gen-button")
  }

  return (
    <button className={status} onClick={props.clickEvent} value={props.val} onMouseEnter={onHover} onMouseLeave={exitHover}>
      {props.val}
    </button>
  );
}

function NavBar(props){
  
  const current = props.navigation;
  function renderButton(name, event, interact, exit) {
    return (
      <Button
        val={name} 
        clickEvent={event}
        onHover={interact}
        exitHover={exit}
      />
    );
  }

  function buttonClick(e){
    //console.log("button click ", e.target.value);
    //setVisibility(false);
    props.changePage(e.target.value);
  }

  return(
    <div className={props.visibility}>
      {props.navigation.map((button) => 
      renderButton(button, buttonClick))}
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
  const now = useRef("HOME");
  const initialState = {
    title: "HOME",
    navigation: ["HOME", "PROJECTS", "ABOUT", "MORE"],
    navVis: "nav-bar"
  }
  const [state, setState] = useState(initialState);
  
  function changePage(nTitle){
    const old = state;
    if(nTitle === "HOME"){
      setState({
        title: nTitle,
        navigation: old.navigation,
        navVis: "nav-bar"
      });
    } else {
      setState({
        title: nTitle,
        navigation: old.navigation,
        navVis: "hid-bar"
      });
    }
    console.log("page changed");
  }
  //messy fix this vvvv
  if(state.navVis != "nav-bar"){
    return (
        <div className="Page">
          <h1>{state.title}</h1>
          <NavBar 
          navigation={state.navigation}
          changePage={changePage}
          visibility={state.navVis}
          /> 
          <Content source={state.title + ".jpg"} alt={state.title} type={state.title}/>
        </div>
    );
  } else {
    return (
      <div className="Page">
        <h1>{state.title}</h1>
        <Content source={state.title + ".jpg"} alt={state.title}/>
        <NavBar 
        navigation={state.navigation}
        changePage={changePage}
        visibility={state.navVis}
        /> 
      </div>
  );

  }
}


function App() {
  return (
    <Page />
  );
}

export default App;

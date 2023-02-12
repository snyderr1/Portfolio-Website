import React, { useEffect, useState, useRef, useLayoutEffect, Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';
import Me from './assets/me.jpg';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
//Author: Ross Snyder
//2022
var projectInfo = {"Test Project 1": "Example Text", "Test Project 2": "Example Text", "Test Project 3": "Example Text", "Test Project 4": "Example Text"};





//buttons
function Button(props) {
  const [status, setStatus] = useState("gen-button"); 
  //status denotes the button type for styling. hover causes button to expand.
  function onHover(e){
    setStatus("hover-button")
  }
  //resets the button on mouse exit.
  function exitHover(e){
    setStatus("gen-button")
  }

  return (
      <button className={status} value={props.type} onMouseEnter={onHover} onMouseLeave={exitHover}>
        {props.type}
      </button>
  );
}
//navigation bar
function NavBar(props){
  return(
    <div className="nav-bar">
      <h1 className="nav-title">Ross Snyder</h1>
      {props.children}
    </div>
  );
}



function About(props){
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
    <div className= "About Me">
      <div className="page-window">
        <img className="board" src={props.source} alt={props.alt}></img>
      </div>
    </div>
  );
} 
//the full page
function Page(props) {

  const initialState = {
    title: "Home",
    navigation: ["Home", "Resume", "Projects", "About"]
    //barPos: "bottom"
  }

  const [state, setState] = useState(initialState);
  function setTitle(nTitle){
    const old = state;
      setState({
      title: nTitle,
      navigation: old.navigation
    });
    console.log(nTitle)
  }
  //default is home, also setting the default page names and bar position to be passed to children
  //const now = useRef("Home");
  return (
    <div className="Page">
      <NavBar>
        {state.navigation.map((name) => {
        return <><Link to={"/" + name} ><Button  type={name} /></Link></>
        })}
      </NavBar>
      <div className = "Content">{props.children}</div>
    </div>
  );
}


function App() {

  
  return (
    <div className ="App">
      <Router>
        <Routes>
          <Route index element={<Page><Home profile={Me} /></Page>} />
          <Route path="/Home" element={<Page><Home/></Page>} />
                  <Route path="/Projects" element={<Page><Projects projectInfo={projectInfo} /></Page>} />
          <Route path="/Resume" element={<Page><Resume/></Page>} />
          <Route path="/About" element={<Page><About/></Page>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

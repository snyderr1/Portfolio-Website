import React, { useEffect, useState, useRef, useLayoutEffect, Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';
import Me from './me.jpg';
import GitIcon from './git.png';
import EmailIcon from './email.svg';
//Author: Ross Snyder
//2022
var projectInfo = {"Test Project 1": "Example Text", "Test Project 2": "Example Text", "Test Project 3": "Example Text", "Test Project 4": "Example Text"};

function GenericText(props){
  return(
    <div className="textBox">
      <h1 className="textBox-title">{props.title}</h1>
      <p className="textBox-text">{props.text}</p>
    </div>
  )
}

function ImgLink(props){
  return (
    <div className="imgLink-container">
      <img className="linkImg" src={props.src} alt={props.alt}></img>
      <a className={props.name} href={props.link}>{props.linkText}</a>
    </div>
  );
}


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


//prints content onto pages.
function Home(props){
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
    <div className= "Home">
      <div className="page-window">
        <img className="portrait" src={Me} alt={props.alt}></img>
        <div className="home-text">         
          <p className ="home-top-blurb">Welcome! My name is Ross Snyder, and this is my website. I recieved my degree in Computer Science Systems
          in 2021 from Oregon State University. </p>
          <p className = "home-bottom-blurb">Text</p>
          <div className = "home-links">
            <ImgLink name="git" src={GitIcon} link="https://github.com/snyderr1/" linkText="https://github.com/snyderr1" />
            <ImgLink name="email" src={EmailIcon} link="rossesny@gmail.com" linkText="rossesny@gmail.com" />
          </div>
          {/* <a className="git-link" href="https://github.com/snyderr1/">GitHub: https://github.com/snyderr1</a> */}
          {/* <a className="email-link" href="rossesny@gmail.com">Email: rossesny@gmail.com</a> */}
        </div>
      </div>
    </div>
  );
}
function Resume(props){
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
    <div className= "Resume">
      <div className="page-window">
        
      </div>
    </div>
  );
}
function Projects(props){
  //def is the name of the content, so that the css can be properly applied
  //for different pages and content types
  return (
    <div className= "Projects">
      <div className="project-container">
        {Object.entries(projectInfo).map((info) => 
        <GenericText key = {info[0]} title={info[0]} text={info[1]}/>)}
      </div>
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
          <Route index element={<Page><Home/></Page>} />
          <Route path="/Home" element={<Page><Home/></Page>} />
          <Route path="/Projects" element={<Page><Projects/></Page>} />
          <Route path="/Resume" element={<Page><Resume/></Page>} />
          <Route path="/About" element={<Page><About/></Page>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

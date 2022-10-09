import React, { useEffect, useState, useRef, useLayoutEffect} from "react";
//import {Routes, Route, useNavigate} from 'react-router-dom';
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
    <button className={status} value={props.type} onClick={props.clickEvent} onMouseEnter={onHover} onMouseLeave={exitHover}>
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

function Content(props){
  return(
    <div className="Home"></div>
  );
  

  console.log(props.type);
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
          <p className = "home-bottom-blurb">I am looking for employment as a web developer or software engineer. 
          Click the navigation bar or links below to checkout my current projects, previous experience, and more.</p>
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
/* function Resume(props){
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
        <GenericText title={info[0]} text={info[1]}/>)}
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
} */
//the full page
function Page(props) {
  
  //default is home, also setting the default page names and bar position to be passed to children
  //const now = useRef("Home");
  return (
    <div className="Page">
      {props.children}

    </div>
  );
}


function App() {

  
  const initialState = {
    title: "Home",
    navigation: ["Home", "Resume", "Projects", "About Me"]
    //barPos: "bottom"
  }

  const [state, setState] = useState(initialState);
  function setTitle(nTitle){
    const old = state;
      setState({
      title: nTitle,
      navigation: old.navigation
    });
  }
  
  
  return (
    <Page >
    <NavBar>
      {state.navigation.map((name) => 
      <Button key={name} type={name} clickEvent={setTitle} />)}
    </NavBar>
      <Content type={state.title}/>
    </Page>
    
  );
}

export default App;

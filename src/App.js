import React, { useEffect, useState, useRef, useLayoutEffect} from "react";
/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
import './index.css';
import Me from './me.jpg';
import GitIcon from './git.png';
import EmailIcon from './email.svg';
//Author: Ross Snyder
//2021

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
  //status denotes the button type for styling. hover causees button to expand.
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

  function buttonClick(e){
    //change to the page to the buttons value, ie the new page name
    console.log("target value is:", e.target);
    props.changePage(e.target.value);
    
  }
  //if this navbar is set to be shown on the page:
  if(props.shown) {
    return(
      <div className={props.type}>
        {props.navigation.map((name) => 
        <Button key={name} type={name} clickEvent={buttonClick} />)}
      </div>
    );
  } else {
    //otherwise render nothing (or rather, a hidden div)
    return(
      <div className="hid-bar">
      </div>
    );
  }
}

function Content(props){
  //render the correct page content based on current title
  if(props.type === "Home") {
    return (
      <Home />
    );
  } else if(props.type === "Resume") {
    return (
      <Resume/>
    );
  } else if(props.type === "Projects") {
    return (
      <Projects />
    );
  } else if(props.type === "About Me") {
    return (
      <About />
    );
  } else {
    //this should spit out an error ideally. only those 4 are in use.
    return (
      <Home />
    );
  }

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
      <div className="page-window">
        
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
  const now = useRef("Home");
  //default is home, also setting the default page names and bar position to be passed to children
  const initialState = {
    title: "Home",
    navigation: ["Home", "Resume", "Projects", "About Me"],
    barPos: "bottom"
  }
  const [state, setState] = useState(initialState);
  
  function changePage(nTitle){
    const old = state;
    //set the navbar to the bottom of the page while at home.
    //to emphasis my face.
    if(nTitle === "Home"){
      setState({
        title: nTitle,
        navigation: old.navigation,
        barPos: "bottom"
      });
    } else {
      setState({
        title: nTitle,
        navigation: old.navigation,
        barPos: "top"
      });
    }
    console.log("page changed");
  }
  //messy fix this vvvv
  //2 navbars instead of having two seperate hooks or a homebar and contentbar
  return (
      <div className="Page">
        <h1>{state.title}</h1>
        <NavBar 
        navigation={state.navigation}
        changePage={changePage}
        shown={(state.title !== "Home" && state.barPos ==="top") ? true : false}
        type={"nav-bar"}
        /> 
        <Content type={state.title}/>
        <NavBar 
        navigation={state.navigation}
        changePage={changePage}
        shown={(state.title === "Home" && state.barPos ==="bottom") ? true : false}
        type={"home-bar"}
        /> 
      </div>
  );
}


function App() {
  return (
    <Page />
  );
}

export default App;

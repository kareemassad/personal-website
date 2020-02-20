import React from 'react';
import "circular-std"; //font
// import './App.css';
import './css/styles.css';
//import images
import chat_Blue from './assets/Chat_Blue.png';
import github_Logo from "./assets/github.svg";
import linkedin_Logo from "./assets/linkedin.svg";
import resume_Logo from "./assets/resume.png";
import background from "./assets/background.png";
import scroll from './assets/Scroll.png';
import mainPic from './assets/mainPic.svg';

function App() { 
  return (
    <div className="App">
      <div>
        {/* Picture Start
    <div class="header">
        <div class="wrapper">
            <div class="headerContainer">
                <div class="introduction">
                    <h2>Hello! I'm</h2>
                    <h1>Kareem<br>El Assad</h1>
                    <p class="occupation">Software Developer</p>
                </div>
            </div>
            <div class="arrowContainer animated bounce">
                <i class="fa fa-angle-down fa-4x" aria-hidden="true"></i>
            </div>
        </div> */}
        {/* Nav Bar Start */}
        <div className="nav">
          <div className="contactMe">
            <a href="#"><img src={chat_Blue} alt="chat logo" />Contact me</a>
          </div>
          <div className="navIcons">
            <a href="#"><img src={github_Logo} alt="Github-logo" /></a>
            <a href="#"><img src={linkedin_Logo} alt="LinkedIn-logo" /></a>
            <a href="#"><img src={resume_Logo} alt="Resume-logo" /></a>
          </div>
        </div>
        <div className="landing">
          <div className="landingWrapper">
            <div className="landingLeft">
              <h1>Kareem El Assad. This is a simple change</h1>
              <p>Hello, my name is Kareem. I am a <span className="blue"> Computer Systems Engineering </span>Student
                at Carleton University</p>
              <ul>
                <li>
                  <p>UI/UX</p>
                </li>
                <li> 
                  <p>Product Designed</p>
                </li>
                <li>
                  <p>Web Design</p>
                </li>
                <li>
                  <p>Tea Steeping Ninja</p>
                </li>
                <li>
                  <p>Blah Blah</p>
                </li>
              </ul>
            </div>
            <div className="landingRight">
              <img src={mainPic} alt="Main with and circle" />
            </div>
          </div>
          <img src={scroll} alt="scroll down" className="scroll" />
        </div>
        {/* JS linking at bottom */}
      </div>
      </div>
    );
  };

export default App;

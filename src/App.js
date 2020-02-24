import React from 'react';
import "circular-std"; //font
import './App.css';
//import './css/styles.css';

//import images
import chat_red from './assets/chat-red.svg';
import github_Logo from "./assets/github.svg";
import linkedin_Logo from "./assets/linkedin.svg";
import resume_Logo from "./assets/resume.png";
import scroll from './assets/Scroll.png';
import mainPic from './assets/mainPic.svg';
import resumeDownload from './assets/kareemResume.pdf';

function App() { 
  return (
    <div className="App">
      <div>
        {/* Nav Bar Start */}
        <div className="nav">
          <div className="contactMe">
            <a href="mailto:kareemassad5@gmail.com"><img src={chat_red} alt="chat logo" />Contact me</a>
          </div>
          <div className="navIcons">
            <a href="https://github.com/kareemassad"><img src={github_Logo} alt="Github-logo" /></a>
            <a href="https://www.linkedin.com/in/kareem-el-assad-759113140/"><img src={linkedin_Logo} alt="LinkedIn-logo" /></a>
            <a href={resumeDownload}><img src={resume_Logo} alt="Resume" /></a>
          </div>
        </div>
        <div className="landing">
          <div className="landingWrapper">
            <div className="landingLeft">
              <h1>Kareem El Assad.</h1>
              <p>Hello, my name is Kareem. I am a <span className="mainColor"> Computer Systems</span></p> 
              <p><span className="mainColor">Engineering Student</span> at Carleton University </p>
              <ul>
                <li>
                  <p>Software Developer</p>
                </li>
                {/* <li>
                  <p>Product Designed</p>
                </li>
                <li>
                  <p>Web Design</p>
                </li>
                */}
                <li>
                  <p>Tea Steeping Ninja</p>
                </li> 
                <li>
                  <p>Pretty cool guy overall</p>
                </li>
              </ul>
            </div>
            <div className="landingRight">
              <img src={mainPic} className="mainPic" alt="Main with and circle" />
            </div>
          </div>
          <img src={scroll} alt="scroll down" className="scroll" />
        </div>
      </div>
    </div>
  );
};

export default App;

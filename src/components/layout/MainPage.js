import React, { Component } from 'react';
import './MainPage.scss';
import me from '../../assets/images/meS.svg';

export default class MainPage extends Component {
    render() {
        return ( 
            <div id="main" className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                            <div className="banner-content slide-in-blurred-left">
                                <h1>
                                    Hello! <span role="img"></span>
                                </h1>
                                <p>
                                    My name is <b>Kareem El Assad</b> and I am a Computer Systems Engineering Students based in Ottawa, Canada. I am a <b>2nd year student at the
                                    Carleton University</b> and I am currently exploring Machine Learning!
							    </p>
                                <button type="button" className="btn btn-outline-primary dark-blue">
                                    Send me a message 
                                    <i className="fas fa-envelope mail-icon"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-6 slide-in-blurred-bottom ">
                            <img src={me} className="me" alt="loading..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// <div>
//         {/* Nav Bar Start */}
//         <div className="nav">
//           <div className="contactMe">
//             <a href="mailto:kareemassad5@gmail.com"><img src={chat_red} alt="chat logo" />Contact me</a>
//           </div>
//           <div className="navIcons">
//             <a href="https://github.com/kareemassad"><img src={github_Logo} alt="Github-logo" /></a>
//             <a href="https://www.linkedin.com/in/kareem-el-assad-759113140/"><img src={linkedin_Logo} alt="LinkedIn-logo" /></a>
//             <a href={resumeDownload}><img src={resume_Logo} alt="Resume" /></a>
//           </div>
//         </div>
//         <div className="landing">
//           <div className="landingWrapper">
//             <div className="landingLeft">
//               <h1>Kareem El Assad.</h1>
//               <p>Hello, my name is Kareem. I am a <span className="mainColor"> Computer Systems</span></p> 
//               <p><span className="mainColor">Engineering Student</span> at Carleton University </p>
//               <ul>
//                 <li>
//                   <p>Software Developer</p>
//                 </li>
//                 {/* <li>
//                   <p>Product Designed</p>
//                 </li>
//                 <li>
//                   <p>Web Design</p>
//                 </li>
//                 */}
//                 <li>
//                   <p>Tea Steeping Ninja</p>
//                 </li> 
//                 <li>
//                   <p>Pretty cool guy overall</p>
//                 </li>
//               </ul>
//             </div>
//             {/* Right hand side landing section */}
//             <div className="landingRight">
//               <img src={mainPic} className="mainPic" alt="Main with and circle" />
//             </div>  
//           </div>

//           {/* <Animated animationIn="bounce" isVisible={true}></Animated> */}
//             <img src={scroll} alt="scroll down" className="scroll" />
//         </div>
//       </div>
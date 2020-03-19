import React, { Component } from 'react';
import './Projects.scss';
import Slider from "react-slick";
import basic from '../../assets/images/chat-red.svg'

export default class Projects extends Component {
    render() {

        // var settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };

        return (
            <div className="projects-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col projects-title">
                                Projects
                        </div>
                    </div>
                </div>

                {/* PROJECT ONE */}
                <div className="project-section">
                    <div id="flex-1" className="row">
                        <div id="a" className="col-sm-6">
                            <img src={basic} className='basil-pic' alt="loading..." />
                        </div>
                        <div id="b" className="col-sm-6 project-description">
                            <div className="project-type">
                                Web app
                            </div>
                            <div className="project-name">
                                Basil
                            </div>
                            <div className="row">
                                <div className="col-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        Basil is a simple recipe app made for students or anyone trying to save money while eating healthy. 
                                        It uses multiple nutrition APIs to help users prepare healthy meals with the ingredients they already have.
                                    </p>
                                    <a href="https://github.com/TalentBoard/Talentboard">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                    <a href="https://talentboard-app.herokuapp.com/login">
                                        <button type="button" className="btn btn-light button-2" href="https://github.com/TalentBoard/Talentboard">
                                            Live Demo
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="c" className="col-sm-6">
                            <a href="https://github.com/TalentBoard/Talentboard">
                                <button type="button" className="btn btn-dark mobile-buttons">
                                    Github <i className="fab fa-github github-icon"></i>
                                </button>
                            </a>
                            <a href="https://talentboard-app.herokuapp.com/login">
                                <button type="button" className="btn btn-light button-2 mobile-buttons" href="https://github.com/TalentBoard/Talentboard">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-section">
                    <div id="flex-2" className="row">
                        <div id="a" className="col-sm-6 project-description">
                            <div className="project-type">
                                Open Source
                            </div>
                            <div className="project-name">
                                Logo detection (Darknet)
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        I used Joseph Redmon's image detection framework <a href="https://pjreddie.com/media/files/papers/yolo.pdf">Darknet</a> to detect popular logos in images. I added some additonal features to the framework such as a watch folder, threading for network predictions, and load balancing images in the watch folder.
                                    </p>
                                    <a href="https://github.com/AmarJ/darknet-NN-framework">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="a" className="col-sm-6">
                            <img src={basic} className='talentboard-gif' alt="loading..." />
                        </div>
                        <div id="c" className="col-sm-6">
                            <a href="https://github.com/AmarJ/darknet-NN-framework">
                                <button type="button" className="btn btn-dark mobile-buttons">
                                    Github <i className="fab fa-github github-icon"></i>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
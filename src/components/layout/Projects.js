import React, { Component } from 'react';
import './Projects.scss';
import Slider from "react-slick";
import basic from '../../assets/images/chat-red.svg'
import basilPic from '../../assets/images/basil-pic.png'
// import sudokuGif from '../../assets/gifs/full-gif.gif'
import sudokuGif from '../../assets/gifs/full-gif-99comp.gif'

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
                            <img src={basilPic} className='basil-pic' alt="loading..." />
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
                                    <a href="https://github.com/kareemassad/basil">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="c" className="col-sm-6">
                            <a href="https://github.com/kareemassad/basil">
                                <button type="button" className="btn btn-dark mobile-buttons">
                                    Github <i className="fab fa-github github-icon"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* PROJECT 2 */}
                <div className="project-section">
                    <div id="flex-2" className="row">
                        <div id="a" className="col-sm-6 project-description">
                            <div className="project-type">
                                Open Source
                            </div>
                            <div className="project-name">
                                Sudoku.com Solver
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        Pariatur culpa labore tempor exercitation id tempor ut deserunt dolor dolore excepteur proident. Quis do excepteur cillum magna do. Dolor quis magna nisi laborum ullamco velit mollit sit in ex ullamco anim. Ipsum laborum consequat commodo incididunt amet amet nostrud magna voluptate. Adipisicing Lorem non velit nostrud in.
                                    </p>
                                    <a href="">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="a" className="col-sm-6">
                            <img src={sudokuGif} className='talentboard-gif' alt="loading..." />
                        </div>
                        <div id="c" className="col-sm-6">
                            <a href="">
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
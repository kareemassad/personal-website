import React, { Component } from 'react';
import './Projects.scss';
// import Slider from "react-slick";
import basilPic from '../../assets/images/basil-pic.png'
import sudokuGif from '../../assets/gifs/full-gif.gif'
// import sudokuGif from '../../assets/gifs/full-gif-99comp.gif'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import { MDBIcon } from "mdbreact"

export default class Projects extends Component {
    render() {
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
                                <div className="col-3">
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
                                    {/* <a href="https://github.com/kareemassad/basil">
                                        <button type="button" className="btn btn-dark button-2">
                                            Live Demo <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a> */}
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
                <br className=""></br>
                <br></br>
                {/* PROJECT Two */}
                <div className="project-section">
                    <div id="flex-2" className="row">
                        <div id="a" className="col-sm-6 project-description">
                            <div className="">
                                <div className="project-type">
                                    Open Source
                                </div>
                                <div className="project-name">
                                    Sudoku.com Solver
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <hr />
                                </div>
                                <div className="col-7">
                                    <p>
                                        A Python program that uses the backtracking algorithm and Python Selenium to interface and solve
                                        puzzles on sudoku.com.
                                    </p>
                                    <a href="https://github.com/kareemassad/sudoku-solver-py">
                                        <button type="button" className="btn btn-dark">
                                            Github <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </div>
                        <div id="b" className="col-sm-6">
                            <img src={sudokuGif} className='sudoku-gif' alt="loading..." />
                        </div>
                        <div id="c" className="col-sm-6">
                            <a href="https://github.com/kareemassad/sudoku-solver-py">
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
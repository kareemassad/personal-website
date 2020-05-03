import React, { Component } from 'react';
import './Involvement.scss';
import me from '../../assets/images/meS.svg';

export default class Involvement extends Component {
    render() {
        return (
            <div className="containerify">
                <div className="row">
                    <div className="col projects-title">
                        Involvement
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 hackathon-section">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 conference-section">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={me} alt="" className="image-fit"></img>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Blah Blah</p>
                                    <p>2Blah Blah2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import BudgetTracker from '../assets/images/budget-tracker.PNG';
import NoteTaker from '../assets/images/note-taker.PNG';
import WeatherDashboard from '../assets/images/weather-dash.PNG';
import CodeQuiz from '../assets/images/code.png';
import PasswordGenerator from '../assets/images/password.PNG';
import Horiseon from '../assets/images/horiseon.PNG';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    <div className="grid-item gallery__item--1">
                                        <a href='https://hloiii.github.io/weather-dashboard/' target="_blank">
                                            <img src={WeatherDashboard} alt="Weather Dashboard"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Weather Dashboard</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--2">
                                        <a href='https://hloiii.github.io/hlo-password-generator-hlo/' target="_blank">
                                            <img src={PasswordGenerator} alt="Password Generator"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Password Generator</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--3">
                                        <a href='https://calm-sands-88671.herokuapp.com/' target="_blank">
                                            <img src={NoteTaker} alt="Note Taker"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Note Taker</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--4">
                                        <a href='https://hloiii.github.io/harry-js-coding-quiz/' target="_blank">
                                            <img src={CodeQuiz} alt="Code Quiz"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Code Quiz</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--5">
                                        <a href='https://boiling-meadow-11208.herokuapp.com/' target="_blank">
                                            <img src={BudgetTracker} alt="Budget Tracker"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Budget Tracker</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--6">
                                        <a href='https://hloiii.github.io/horiseon/' target="_blank">
                                            <img src={Horiseon} alt="Horiseon"
                                                className="gallery__img" />
                                            <div className="desc">
                                                <h5>Horiseon</h5>
                                                <p></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;

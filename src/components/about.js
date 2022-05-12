import React from 'react';
import Avatar from '../assets/images/avatar.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        Full Stack Engineer with a demonstrated history of working on production web and mobile applications. Deep
                                        understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, Redux, NodeJS, MongoDB CSS,
                                        HTML and other frontend technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

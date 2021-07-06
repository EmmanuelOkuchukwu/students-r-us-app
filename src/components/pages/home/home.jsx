import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../layout/navbar';
import { Banner, MainContent, SigninButton, SignupButton, Card, AboutLessons, Lecturers } from './homeStyles';
import LearnBackground from '../../assets/learn-2001847_1920.jpg';
import BulbsBackground from '../../assets/bulbs-4550601_1920.jpg';
import BoardBackground from '../../assets/board-3699939_1920.jpg';
import Fundamentals from '../../assets/fundamentals.svg';
import { ToastContainer } from 'react-toastify';

export default function Home() {
    const history = useHistory();
    return (
        <div>
            <Navbar />
            <Banner>
                <div className="signin-signup-container">
                    <h1>Students Ur Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus enim iure quod repellat totam! Aliquam asperiores aspernatur blanditiis commodi doloremque ea, eius eligendi est et excepturi id illo illum in ipsam maxime minima mollitia natus.</p>
                    <div className="flex-container">
                        <h4>Register for an account or Sign In for full access by clicking the buttons below</h4>
                        <div className="btn-flex">
                            <SigninButton onClick={() => history.push('/signin')}>Sign In</SigninButton>
                            <SignupButton onClick={() => history.push('/signup')}>Sign Up</SignupButton>
                        </div>
                    </div>
                </div>
            </Banner>
            <MainContent>
                <div className="card-flex">
                    <Card>
                        <img src={LearnBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>Student Hub</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae cum eos et facilis itaque molestias non quae quaerat ullam! Cumque est illo suscipit? Autem doloribus magnam nam nulla ut!</p>
                            <button>Visit</button>
                        </div>
                    </Card>
                    <Card>
                        <img src={BulbsBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>Add a New Rate Score</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae cum eos et facilis itaque molestias non quae quaerat ullam! Cumque est illo suscipit? Autem doloribus magnam nam nulla ut!</p>
                            <button>Visit</button>
                        </div>
                    </Card>
                    <Card>
                        <img src={BoardBackground} alt="" className="img-responsive" width="600" height="400" />
                        <div className="description">
                            <h2>View Your Scores</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae cum eos et facilis itaque molestias non quae quaerat ullam! Cumque est illo suscipit? Autem doloribus magnam nam nulla ut!</p>
                            <button>Check out your score</button>
                        </div>
                    </Card>
                </div>
            </MainContent>
            <AboutLessons>
                <div className="main-section">
                    <div className="img-section">
                        <img className="img" src={Fundamentals} alt="" width="600" height="400"/>
                    </div>
                    <div className="text-desc">
                        <h1>Learn together</h1>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?</p>
                    </div>
                </div>
            </AboutLessons>
            <Lecturers>
                <div className="main-container">
                    <h3>Meet Your Lecturers</h3>
                </div>
            </Lecturers>
            <ToastContainer />
        </div>
    );
}

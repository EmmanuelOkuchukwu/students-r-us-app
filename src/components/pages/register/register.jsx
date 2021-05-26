import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterButton, StyledLink, StyledContainer, StyledSignupContainer } from './registerStyles';
import { useAlert } from 'react-alert';
import CustomTextField from '../../layout/customTextField';
import CustomSelectField from '../../layout/customSelectField';

function Register({ setShowHide, showHide }) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const alert = useAlert();


    const handleSignup = (evt) => {
        evt.preventDefault();
        alert.success('Successfully registered!');
        setShowHide(!showHide);
    }
    return (
        <StyledContainer>
            <StyledSignupContainer>
                <form className="styled-form">
                    <h1>Register</h1>
                    <CustomTextField
                        className="text-field"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <CustomTextField
                        className="text-field"
                        type="text"
                        name="fullname"
                        placeholder="Enter your Full Name"
                        value={fullname}
                        onChange={(evt) => setFullname(evt.target.value)}
                    />
                    <CustomSelectField
                        className="select"
                        placeholder="Select your group"
                    />
                    <CustomTextField
                        className="text-field"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <RegisterButton onClick={handleSignup}>Register</RegisterButton><br /><br />
                    <p>Head back to the{' '}<StyledLink onClick={()=>setShowHide(false)}>Sign In</StyledLink></p>

                </form>
            </StyledSignupContainer>
        </StyledContainer>
    );
}

export default Register;

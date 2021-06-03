import React, { useState, useEffect } from 'react';
import { StyledButton, StyledContainer, StyledSigninContainer } from './signinStyles';
import CustomTextField from '../../layout/customTextField';
import { Link } from 'react-router-dom';
import Register from '../register/register';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useFormik } from 'formik';
import yup from 'yup';

function Signin() {
    const history = useHistory();
    const [showHide, setShowHide] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const alert = useAlert();

    const handleSignin = (evt) => {
        evt.preventDefault();
        history.push('/dashboard');
        alert.success('Successfully Signed In!');
    }
    // const SigninValidation = yup.object().shape({
    //     email: yup
    //         .string()
    //         .email(),
    //         .required(),
    //     password: yup
    // })
    return (
        <StyledContainer>
            <StyledSigninContainer>
                <form className="styled-form">
                    <h1>Sign In</h1>
                    <CustomTextField
                        className="text-field"
                        type="text"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                        placeholder="Your Email"
                    />
                    <CustomTextField
                        className="text-field"
                        type="password"
                        variant="outlined"
                        name="password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                        placeholder="Enter Password"
                    />
                    <StyledButton onClick={handleSignin}>Sign In</StyledButton><br /><br />
                    <p>New to Students R Us{' '}<Link to="/signup">Register here</Link></p>
                </form>
            </StyledSigninContainer>
        </StyledContainer>
    );
}

export default Signin;

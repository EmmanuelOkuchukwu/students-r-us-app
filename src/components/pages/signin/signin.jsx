import React, { useState, useEffect } from 'react';
import { StyledButton, StyledContainer, StyledSigninContainer } from './signinStyles';
import CustomTextField from '../../layout/customTextField';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {
    const history = useHistory();
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email().required('Required'),
        password: yup.string()
            .min(8, 'Minimum 8 Characters')
            .max(50, 'Maximum 50 Characters')
            .required('Required')
    });
    return (
        <StyledContainer>
            <StyledSigninContainer>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        history.push('/dashboard');
                        toast.success('Successfully Signed In!');
                    }}
                >
                    {({handleSubmit, handleChange, values, errors, touched}) => (
                        <form onSubmit={handleSubmit} className="styled-form">
                            <h1>Sign In</h1>
                            <CustomTextField
                                className={"text-field" + (errors.email && touched.email ? ' is-invalid' : '')}
                                type="text"
                                variant="outlined"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            <CustomTextField
                                className={"text-field" + (errors.password && touched.password ? ' is_invalid' : '')}
                                type="password"
                                variant="outlined"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            <StyledButton>Sign In</StyledButton><br /><br />
                            <p>New to Students R Us{' '}<Link to="/signup">Register here</Link></p>
                        </form>
                    )}
                </Formik>
            </StyledSigninContainer>
        </StyledContainer>
    );
}

export default Signin;

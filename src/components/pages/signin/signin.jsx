import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/Styles';
import { StyledButton, StyledContainer } from './signinStyles';
import Link from '@material-ui/core/Link';
import Register from '../register/register';
import { useHistory } from 'react-router-dom';

function Signin() {
    const history = useHistory();
    const [showHide, setShowHide] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleSignin = (evt) => {
        evt.preventDefault();
        history.push('/dashboard');
    }
    return (
        <Box component="div" className={classes.styledContainer}>
            {showHide ? (
                <Register />
            ) : (
                <Box component="div" className={classes.styledSigninContainer}>
                    <form className={classes.styledForm}>
                        <Typography variant="h4">Sign In Page</Typography><br />
                        <TextField
                            className={classes.styledTextField}
                            type="text"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                            placeholder="Enter Your Email"
                        /><br /><br />
                        <TextField
                            className={classes.styledTextField}
                            type="password"
                            variant="outlined"
                            name="password"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                            placeholder="Enter Your Password"
                        /><br /><br />
                        <StyledButton onClick={handleSignin} variant="contained">Signin</StyledButton><br /><br />
                        <Link href="#" onClick={()=>setShowHide(true)}>Register here</Link>
                    </form>
                </Box>
            )}
        </Box>
    );
}

const useStyles = makeStyles({
    styledButton: {
        color: '#1BA1E2',
        backgroundColor: 'blue',
        width: '100%'
    },
    styledTextField: {
        width: '100%'
    },
    styledContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
    },
    styledSigninContainer: {
        padding: '20px',
        width: '435px',
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '400px',
        borderRadius: '5px'
    },
    styledForm: {
        width: '400px',
    }
});

export default Signin;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles, theme } from '@material-ui/core/Styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { RegisterButton, StyledLink } from './registerStyles';

const useStyles = makeStyles((theme) => ({
    styledRegisterContainer: {
        display: 'flex',
        // margin: theme.spacing(1)
        padding: '30px',
        width: '400px',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        flexDirection: 'column',
        height: '550px',
        borderRadius: '5px'
    },
    styledForm: {
        width: '300px',
        // paddingTop: theme.spacing(1)
    },
    styledTextField: {
        width: '100%',
        // paddingTop: theme.spacing(2),
        height: '50px'
    },
    styledButton: {
        width: '100%',
    }
}));

function Register({setShowHide}) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles()

    return (
        <Box component="div" className={classes.styledRegisterContainer}>
            <form className={classes.styledForm}>
                <h1>Register</h1><br />
                <TextField
                    className={classes.styledTextField}
                    type="text"
                    name="email"
                    label="Enter your email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    variant="outlined"
                /><br /><br />
                <TextField
                    className={classes.styledTextField}
                    type="text"
                    name="fullname"
                    label="Enter your Full Name"
                    value={fullname}
                    onChange={(evt) => setFullname(evt.target.value)}
                    variant="outlined"
                /><br /><br />
                <Select
                    className={classes.styledTextField}
                    name="group"
                    value={group}
                    onChange={(evt) => setGroup(evt.target.value)}
                    variant="outlined"
                    placeholder="Select a Group"
                >
                    <MenuItem>
                        <em>Select group</em>
                    </MenuItem>
                    <MenuItem value={1}>WildFireBoyz</MenuItem>
                    <MenuItem value={2}>DutchesBoys</MenuItem>
                    <MenuItem value={3}>RockstarClan</MenuItem>
                    <MenuItem value={4}>OtherzGroup</MenuItem>
                    {/*<MenuItem value={5}>5</MenuItem>*/}
                </Select><br /><br />
                <TextField
                    className={classes.styledTextField}
                    type="password"
                    name="password"
                    label="Enter your Password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    variant="outlined"
                /><br /><br />
                <RegisterButton>Register</RegisterButton><br /><br />
                <Typography variant="p">
                    Head back to the
                </Typography>{' '}
                <StyledLink onClick={()=>setShowHide(false)}>Sign In</StyledLink>
            </form>
        </Box>
    );
}

export default Register;

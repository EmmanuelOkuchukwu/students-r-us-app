import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';



function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const alert = useAlert();
    const handleSignout = (evt) => {
        evt.preventDefault();
        if(alert.info('Signing Out!')) {
            history.push("/");
        }
    }
    return (
        <StyledNavbar>
            <div className="navbar-wrapper">
                <Typography variant="h6" className={classes.heading}>Students R Us</Typography>
                <a href="#">
                    <svg style={{ width: '17px', height: '17px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="13" width="13">
                        <path d="M15.6 32s-.1 0 0 0h-.8c-2.7 0-5.6 0-8.4-.8-3-.9-4.6-2.4-4.7-4.7-.1-1.1.3-2.2 1-3.1 1.1-1.5 2.7-2.4 4.1-3.1.5-.3 1-.5 1.5-.8.6-.4 2-1.4 2.1-2.7 0-.6-.2-1.3-.8-2.1l-.6-.9c-.4-.6-.8-1.2-1.2-1.9-1.2-2.5-1-5.6.4-7.9.2-.3.4-.6.7-.9 1.8-2 4.3-3.1 7-3.1 2.7-.1 5.3 1.1 7.2 3 .3.3.6.7.8 1 1.4 2.3 1.5 5.4.3 7.9-.4.7-.8 1.3-1.2 1.9l-.6.9c-.5.8-.8 1.5-.8 2.1.1 1.3 1.5 2.3 2.1 2.7.5.3 1 .6 1.5.8 1.4.7 3 1.5 4.1 3.1.7.9 1 2.1 1 3.1-.1 2.2-1.7 3.8-4.7 4.7-.7.2-1.4.3-2 .5-.7.1-1.5-.4-1.6-1.1-.1-.7.4-1.5 1.1-1.6.6-.1 1.2-.2 1.7-.4 2.4-.7 2.7-1.5 2.7-2.2 0-.5-.1-.9-.5-1.4-.7-1-1.9-1.6-3.1-2.3-.6-.3-1.1-.6-1.7-.9-2.1-1.3-3.3-3-3.4-4.9-.1-1.2.3-2.4 1.2-3.8.2-.3.4-.7.7-1 .4-.5.7-1 1-1.5.8-1.6.7-3.6-.2-5.2-.1-.1-.2-.2-.4-.5-1.3-1.4-3.2-2.2-5.2-2.2-1.9 0-3.7.8-5 2.2-.2.2-.3.4-.4.5-.9 1.6-1 3.6-.2 5.2.3.5.6 1 1 1.5.2.3.5.6.7 1 .9 1.3 1.3 2.6 1.2 3.8-.1 1.9-1.3 3.6-3.4 4.9-.5.3-1.1.6-1.7.9C6.9 23.4 5.7 24 5 25c-.3.4-.5.9-.5 1.4 0 .7.4 1.5 2.7 2.2 2.4.7 4.9.7 7.6.7h.8c.4 0 .8.2 1 .5.3.3.4.7.3 1.1 0 .6-.6 1.1-1.3 1.1z" />
                    </svg>
                </a>
                <NavButton onClick={handleSignout}><b>Sign Out</b></NavButton>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;

// Styles for Navbar
const useStyles = makeStyles((theme) => ({
    heading: {
        flexGrow: 1,
        fontFamily: 'Noto Serif TC, serif!important'
    }
}));

const NavButton = styled(Button)`
  color: #fff;
  text-transform: initial;
`

const StyledNavbar = styled.nav`
  color: #fff;
  background-color: #3f51b5;
  padding: 10px;
  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
  }
  a {
    padding: 5px;
    &:hover {
      border: 1px solid #fff; 
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
      color: #fff;
    }
  }
`

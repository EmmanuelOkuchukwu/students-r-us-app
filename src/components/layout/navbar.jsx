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
                <div className="icon-flex">
                    <h3>Students R Us</h3>
                </div>
                <NavButton href="" onClick={handleSignout}><b>Sign Out</b></NavButton>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;

// Styles for Navbar

const NavButton = styled.a`
  color: #fff;
  text-transform: initial;
`

const StyledNavbar = styled.nav`
  color: #fff;
  background-color: #3f51b5;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  a {
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #fff;
    }
  }
  h3 {
    margin: 0;
  }
`

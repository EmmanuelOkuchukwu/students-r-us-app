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


function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const handleSignout = (evt) => {
        evt.preventDefault();
        history.push("/");
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.heading}>Students R Us</Typography>
                    <MenuItem>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </MenuItem>
                    <NavButton onClick={handleSignout}><b>Sign Out</b></NavButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    heading: {
        flexGrow: 1
    }
}));

const NavButton = styled(Button)`
  color: #fff;
  text-transform: initial;
`

import React, { useState } from 'react';
import useAlert from 'react-alert';
import { StyledAddRateForm, StyledTextField } from './addRateStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddRate({ setShowHide }) {
    return (
        <StyledAddRateForm>
            <h2>Add rate</h2>
            <form>
                <StyledTextField variant="outlined" type="text" name="" label="Your Name" /><br />
                <StyledTextField variant="outlined" type="text" name="" label="Comments" /><br />
                <StyledTextField variant="outlined" type="text" name="" label="Add score" /><br />
                <StyledTextField variant="outlined" type="text" name="" label="Name of Student" /><br />
                <div className="flex-btn">
                    <Button variant="outlined">Submit Rate</Button>
                    <Button variant="outlined" onClick={() => setShowHide(false)}>Back to main board</Button>
                </div>
            </form>
        </StyledAddRateForm>
    )
}

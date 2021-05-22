import React, { useState } from 'react';
import useAlert from 'react-alert';
import { StyledAddRateForm, StyledTextField, StyledButton } from './addRateStyles';

export default function AddRate() {
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [addScore, setAddScore] = useState('');
    const [studentName, setStudentName] = useState('');

    return (
        <StyledAddRateForm>
            <h2>Add rate</h2>
            <form>
                <StyledTextField variant="outlined" type="text" value={name} onChange={(evt) => setName(evt.target.value)} name="name" label="Your Name" /><br />
                <StyledTextField variant="outlined" type="text" value={comments} onChange={(evt) => setComments(evt.target.value)} name="comments" label="Comments" /><br />
                <StyledTextField variant="outlined" type="number" value={addScore} onChange={(evt) => setAddScore(evt.target.value)} name="addscore" label="Add score" /><br />
                <StyledTextField variant="outlined" type="text" value={studentName} onChange={(evt) => setStudentName(evt.target.value)} name="studentname" label="Name of Student" /><br />
                <div className="flex-btn">
                    <StyledButton>Submit Rate</StyledButton>
                </div>
            </form>
        </StyledAddRateForm>
    )
}

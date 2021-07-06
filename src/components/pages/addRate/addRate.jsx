import React, { useState } from 'react';
import useAlert from 'react-alert';
import { StyledAddRateForm, StyledTextField, StyledTextArea, StyledButton } from './addRateStyles';

export default function AddRate() {
    const initialValues = {
        name: '',
        comments: '',
        addScore: '',
        studentName: ''

    }
    const [student, setStudent] = useState(initialValues);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setStudent({ ...student, [name]: value })
    }

    return (
        <StyledAddRateForm>
            <form>
                <h2>Add rate</h2>
                <StyledTextField type="text" value={initialValues.name} onChange={handleInputChange} name="name" placeholder="Your Name" />
                <StyledTextArea type="text" value={initialValues.comments} onChange={handleInputChange} name="comments" rows="7" cols="50" placeholder="Comments" />
                <StyledTextField type="number" value={initialValues.addScore} onChange={handleInputChange} name="addscore" placeholder="Add score" />
                <StyledTextField type="text" value={initialValues.studentName} onChange={handleInputChange} name="studentname" placeholder="Name of Student" /><br />
                <div className="flex-btn">
                    <StyledButton>Submit Rate</StyledButton>
                </div>
            </form>
        </StyledAddRateForm>
    )
}

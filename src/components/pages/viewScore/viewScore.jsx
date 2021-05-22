import React from 'react';
import Navbar from '../../layout/navbar';
import { StyledAccordion, ViewScoreStyled } from './viewScoreStyles';
import { comments } from '../../data/comments';
import CustomAccordion from '../../layout/CustomAccordion';

export default function ViewScore() {
    return (
        <ViewScoreStyled>
            <Navbar />
            <br />
            <h1>View Your Score</h1>
            {comments.comments.length > 0 ? comments.comments.map(({ id, studentName, score, comment }) => (
                <div className="accordion-size" key={id}>
                    <CustomAccordion id={id} studentName={studentName} score={score} comment={comment} />
                </div>
            )) : <div>No comments found</div>}
        </ViewScoreStyled>
    );
}

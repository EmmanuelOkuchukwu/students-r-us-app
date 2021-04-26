import React from 'react';
import Navbar from '../../layout/navbar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyledAccordion, ViewScoreStyled } from './viewScoreStyles';
import { comments } from '../../data/comments';

export default function ViewScore() {
    return (
        <ViewScoreStyled>
            <Navbar />
            <br />
            <h1>View Your Score</h1>
            {comments.comments.length > 0 ? comments.comments.map(comment => (
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <h1>{comment.studentName}</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                           <p>Score: {comment.score}</p>
                           <p>Comment: {comment.comment}</p> 
                        </div>
                    </AccordionDetails>
                </StyledAccordion>
            )) : <div>No comments found</div>}
        </ViewScoreStyled>
    );
}

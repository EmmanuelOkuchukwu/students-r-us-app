import React, { useState } from 'react';
import styled from 'styled-components';

const CustomAccordion = ({ id, studentName, score, comment }) => {
    const [isActive, setIsActive] = useState(false);
    return(
        <Accordion>
            <AccordionTitle onClick={() => setIsActive(!isActive)}>
                <h1>{studentName}</h1>
                {isActive ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />}
            </AccordionTitle>
            {isActive &&
                <AccordionContent>
                    <p>Your Score: {score}</p>
                    <p>The Comments: {comment}</p>
                </AccordionContent>
            }
        </Accordion>
    );
}

export default CustomAccordion;

const Accordion = styled.div`
  max-width: 1200px;
  margin: 10px auto;
`
const AccordionTitle = styled.div`
  height: 66.67px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  cursor: pointer;
  h1 {
    margin: 0 10px;
  }
  .fa-plus {
    margin: 0 10px;
  }
  .fa-minus {
    margin: 0 10px;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    h1 {
      font-size: 19px;
    }
  }  
`
const AccordionContent = styled.div`
  width: 100%;
  border-top: 1px solid #000;
  background-color: lightgrey;
  height: 133.33px;
  p {
    margin: 0 10px;
  }
`

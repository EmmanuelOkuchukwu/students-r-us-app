import styled from 'styled-components';
import CustomTextField from '../../layout/customTextField';

const StyledAddRateForm = styled.div`
  padding: 25px;
  margin: 5px;  
  width: 100%;
  background-color: ${props => props.theme.cardBackgroundColor};
  form {
    width: 100%;
    padding: 10px 150px;
  }
  .flex-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${'' /* a {
          text-decoration: none;
          color: #000;
          padding: 5px;
          background-color: 
      } */}
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
      width: 100%;
  }
`;

const StyledTextField = styled(CustomTextField)`
  width: 100%; 
  margin: 5px; 
  padding: 15px;
  border-radius: 4px;
  border: none;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  border: none;
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
`

const StyledButton = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  padding: 10px;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: lightslategrey;
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`

export {
  StyledAddRateForm,
  StyledTextField,
  StyledButton,
  StyledTextArea
}

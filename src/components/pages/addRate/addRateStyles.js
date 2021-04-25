import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledAddRateForm = styled.div`
  border: 1px solid #000;
  padding: 25px;
  margin: 5px;  
  width: 40%;
  form {
      width: 100%;
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

const StyledTextField = styled(TextField)`
  width: 100%; 
  margin: 5px; 
`

export {
  StyledAddRateForm,
  StyledTextField
}
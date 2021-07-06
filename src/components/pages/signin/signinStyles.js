import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 5px 0;
  width: 100%;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightslategrey;
    color: #fff;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const StyledSigninContainer = styled.div`
  padding: 30px;
  width: 400px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 450px;
  border-radius: 5px;
  .styled-form {
    width: 300px;
  }
  .text-field {
    height: 35px;
    margin: 5px 0;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0 6px;
    &:focus {
      outline: none;
    }
  }
  .invalid-feedback {
    color: red;
  }
`

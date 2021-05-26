import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterButton = styled.button`
  width: 100%;
  background-color: lightskyblue;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none!important;
  &:hover {
    color: lightslategrey;
    transition: all 0.2s ease-in-out;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const StyledSignupContainer = styled.div`
  padding: 30px;
  width: 400px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 525px;
  border-radius: 5px;
  .styled-form {
    width: 300px;
  }
  .text-field {
    height: 35px;
    margin: 10px 0;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0 6px;
    &:focus {
      outline: none;
    }
  }
  .select {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 4px;
    margin: 10px 0;
  }
`;

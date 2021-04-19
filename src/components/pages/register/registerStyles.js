import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export const RegisterButton = styled(Button)`
  width: 100%;
  background-color: lightskyblue;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none!important;
  &:hover {
    color: lightslategrey;
    transition: all 0.2s ease-in-out;
  }
`

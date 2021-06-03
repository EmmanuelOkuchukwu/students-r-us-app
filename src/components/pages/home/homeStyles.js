import styled from 'styled-components';
import backgroundImg from '../../assets/book-4126483.jpg';

export const Banner = styled.div`
  height: 550px;
  background-image: url(${ backgroundImg });
  background-position: left;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(100% 0,100% calc(100% - 50px),50% 100%,0 calc(100% - 50px),0 0);
  .signin-signup-container {
    width: 750px;
    max-width: 1400px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    p {
      color: #fff;
      text-align: center;
    }
    h1 {
      color: #fff;
    }
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    h4 {
      color: #fff;
    }
  }
  
  .btn-flex {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const SigninButton = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightslategrey;
    color: #fff;
  }
`;

export const SignupButton = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightslategrey;
    color: #fff;
  }
`;

export const MainContent = styled.div`
  margin: 10px;
  .card-flex {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  width: 350px;
  box-shadow: ${props => props.theme.MainShadow};
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
  .img-responsive {
    width: 100%;
    height: auto;
  }
  .description {
    margin: 10px;
  }
`;


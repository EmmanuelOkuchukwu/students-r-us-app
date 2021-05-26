import React from 'react';
import styled from 'styled-components';

const Breadcrumb = () => {
    return (
        <StyledBreadcrumb>
            <ul>
                <li><a href="/dashboard" className="link-styles">Dashboard</a></li> /
                <li><a>View Your Score</a></li>
            </ul>
        </StyledBreadcrumb>
    )
}

export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  background-color: lightgrey;
  width: 250px;
  margin: 0 auto;
  padding: 0.1px;
  ul {
    list-style: none;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
  }
  
  a {
    text-decoration: none;
    padding: 5px;
  }
  
  .link-styles {
    color: #3f51b5;
    &:hover {
      color: blue;
      transition: all 0.2s ease-in-out;
    }
  }
`;

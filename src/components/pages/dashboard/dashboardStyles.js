import styled from 'styled-components';

const StyledBanner = styled.div`
  height: 220px;
  padding: 10px 20px;
  background-color: ${props => props.theme.cardBackgroundColor};
  // Tablet view
  @media screen and (max-width: ${props => props.theme.tablet}) {
    height: 190px;
    h1 {
      font-size: 25px;
    }
    .btn-profile {
      font-size: 16px;
    }
  }
  // Mobile view 
  @media screen and (max-width: ${props => props.theme.mobile}) {
    height: 165px;
    h1 {
      font-size: 16px;
    }
    .btn-profile {
      font-size: 12px;
    }
  }
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`
const MiniNav = styled.div`
  padding: 5px;
  border-radius: 4px;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: ${props => props.theme.MainShadow};
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    li {
      margin: 0 5px;
    }
    a {
      text-decoration: none;
      color: steelblue;
      border-right: 1px solid #000;
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        color: #282c34;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  // Tablet view
  @media screen and (max-width: ${props => props.theme.tablet}) {
    padding: 5px;
    a {
      font-size: 20px;
      padding: 0;
    }
  }

  // Mobile view
  @media screen and (max-width: ${props => props.theme.mobile}) {
   padding: 1px;
    a {
      font-size: 15px;
      padding: 0;
    }
  }

`
const DashboardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1420px;
  margin: 0 auto;
  .student-details {
    width: 350px;
    box-shadow: ${props => props.theme.MainShadow};
    height: 450px;
    background-color: ${props => props.theme.cardBackgroundColor};
  }
  .group-details {
    display: flex;
    flex-wrap: wrap;
    width: 55%;
  }
  .student-card {
    width: 45%;
    height: 260px;
    margin: 10px auto;
    padding: 15px;
    box-shadow: ${props => props.theme.MainShadow};
    background-color: ${props => props.theme.cardBackgroundColor};
  }
  
  // Tablet view
  @media screen and (max-width: ${props => props.theme.tablet}) {
    flex-direction: column;
    .group-details {
      flex-direction: column;
      width: 100%;
      .student-card {
        width: 100%;
        height: 100%;
        p {
          font-size: 20px;
          text-align: center;
        }
        h2 {
          font-size: 26px;
          text-align: center;
        }
      }
    }
    .student-details {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      padding: 15px;
      p {
        font-size: 20px;
      }
      h3 {
        font-size: 25px;
      }
    }
  }
  
  // Mobile View
  @media screen and (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    .student-details {
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
    }
    .student-card {
      width: 100%;
      margin: 10px 0;
    }
    .group-details {
      margin: auto;
    }
  }
`

export {
    StyledBanner,
    FlexDiv,
    MiniNav,
    DashboardSection
}

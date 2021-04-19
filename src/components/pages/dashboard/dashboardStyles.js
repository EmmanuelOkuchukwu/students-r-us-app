import styled from 'styled-components';

const StyledBanner = styled.div`
  height: 200px;
  padding: 10px 20px;
  border-bottom: 1px solid #000;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MiniNav = styled.div`
  width: 400px;
  height: 60px;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 20px 0;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      margin: 0 5px;
    }
    a {
      text-decoration: none;
      color: steelblue;
      &:hover {
        color: #282c34;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`
const DashboardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .student-details {
    width: 350px;
    border: 1px solid #000;
    height: 450px;
  }
  .group-details {
    display: flex;
    flex-wrap: wrap;
    width: 55%;
    padding: 0 10px;
  }
  .student-card {
    width: 40%;
    margin: 12px;
    padding: 15px;
    border: 1px solid #000;
    //.card-header {}
  }
`

export {
    StyledBanner,
    FlexDiv,
    MiniNav,
    DashboardSection
}

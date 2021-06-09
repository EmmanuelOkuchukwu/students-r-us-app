import styled from 'styled-components';

const ViewScoreStyled = styled.div`
  margin: 40px 0;
  .accordion-size {
    max-width: 1400px;
    margin: 0 auto;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .accordion-size {
      margin: 0 10px;
      text-align: left;
    }
  }
  .score-title {
    max-width: 1200px;
    margin: 0 auto;
  }
`
// const StyledAccordion = styled(Accordion)`
//     margin: 10px 20px;
// `;

export {
    // StyledAccordion,
    ViewScoreStyled
}

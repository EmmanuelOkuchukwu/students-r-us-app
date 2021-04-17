import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const StyledButton = styled(Button)`
  background-color: lightskyblue;
  width: 100%;
`

export const StyledContainer = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;
`


// export default theme => ({
//     styledButton: {
//         color: '#1BA1E2',
//         backgroundColor: 'blue',
//         width: '100%'
//     },
//     styledTextField: {
//         width: '100%'
//     },
//     styledContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '100vh'
//     },
//     styledSigninContainer: {
//         padding: '20px',
//         width: '450px',
//         backgroundColor: 'lightblue',
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '400px',
//         borderRadius: '5px'
//     },
//     styledForm: {
//         width: '400px',
//     }
// })

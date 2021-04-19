import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../layout/navbar/navbar';
import Typography from '@material-ui/core/Typography';
import { StyledBanner, FlexDiv, MiniNav, DashboardSection } from './dashboardStyles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { mockData } from '../../data/mockData';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}));

function Dashboard() {
    const [isLoading, setIsLoading] = useState(false);
    React.useEffect(() => {
        setIsLoading(false)
    },[])
    const classes = useStyles();

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className={classes.root}>
                <Navbar /><br />
                <StyledBanner>
                    <FlexDiv>
                        <Typography variant="h4">Welcome Back, {mockData.fullName}</Typography>
                        <Button>Profile</Button>
                    </FlexDiv>
                    <MiniNav>
                        <ul>
                            <li><a href="#">Rate a student</a></li>
                            <li><a href="#">View your score</a></li>
                        </ul>
                    </MiniNav>
                </StyledBanner><br />
                <DashboardSection>
                    <div className="student-details">
                        <div style={{ textAlign: 'center' }}>
                            <PersonIcon style={{ fontSize: 100 }} />
                            <Typography variant="h4">{mockData.fullName}'s Details</Typography>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Typography variant="h6">Your Full Name:</Typography>
                            <p>{mockData.fullName}</p>
                            <Typography variant="h6">Your Email:</Typography>
                            <p>{mockData.email}</p>
                            <Typography variant="h6">Your Group:</Typography>
                            <p>{mockData.group}</p>
                        </div>
                    </div>
                    <div className="group-details">
                        {mockData.results.length > 0 ? mockData.results.map(result => (
                            <div className="student-card" key={result.id}>
                                <div className="card-header">
                                    <Typography variant="h6">Student: {result.name}</Typography>
                                </div>
                                <hr />
                                <p>Student Email: {result.email}</p>
                                <p>Score: {result.rateScore}</p>
                                <p>Comments: {result.comments}</p>
                                <p>Rater's Username: {result.raterUsername}</p>
                            </div>
                        )) : <div className="not-found">No groups found</div>
                        }
                    </div>
                </DashboardSection>
            </div>
        );
    }
}

export default Dashboard;

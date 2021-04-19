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
                        <h1>Welcome Back, {mockData.fullName}</h1>
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
                            <h3><b>{mockData.fullName}'s Details</b></h3>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3>Your Full Name:</h3>
                            <p>{mockData.fullName}</p>
                            <h3>Your Email:</h3>
                            <p>{mockData.email}</p>
                            <h3 variant="h6">Your Group:</h3>
                            <p>{mockData.group}</p>
                        </div>
                    </div>
                    <div className="group-details">
                        {mockData.results.length > 0 ? mockData.results.map(result => (
                            <div className="student-card" key={result.id}>
                                <div className="card-header">
                                    <h2>Student: {result.name}</h2>
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

import React, { useState } from 'react';
import Navbar from '../../layout/navbar';
import { StyledBanner, FlexDiv, MiniNav, DashboardSection } from './dashboardStyles';
import { mockData } from '../../data/mockData';
import AddRate from '../addRate/addRate';
import Modal from "../../layout/modal";
import { ToastContainer } from 'react-toastify';

function Dashboard() {
    const [isLoading, setIsLoading] = useState(false);
    const [showHide, setShowHide] = useState(false);
    React.useEffect(() => {
        setIsLoading(false)
    },[])

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div data-testid="dashboard-1">
                <Navbar />
                {/*--------------------------------------------Banner Area-------------------------------------------*/}
                <StyledBanner>
                    <FlexDiv>
                        <h1>Welcome Back, {mockData.fullName}</h1>
                    </FlexDiv>
                    <MiniNav>
                        <ul>
                            <li><a className="link" onClick={() => setShowHide(!showHide)}>Rate a student</a></li>
                            <li><a className="link" href="/view-score">View your score</a></li>
                            <Modal />
                        </ul>
                    </MiniNav>
                </StyledBanner><br />
                {/*----------------------------------------Main Dashboard Area---------------------------------------*/}
                <DashboardSection>
                    {showHide ? (
                        <AddRate />
                    ) : (
                        <div className="group-details">
                        {mockData.results.length > 0 ? mockData.results.map(result => (
                            <a href="#" className="student-card" key={result.id}>
                                <div className="card-header">
                                    <h2>{result.name}</h2>
                                    <div className="provisional-count">
                                        <p>Provisional comment counts</p>
                                        <p>{result.provisionalCount}</p>
                                    </div>
                                </div>
                                <hr />
                                <p>Student Email: {result.email}</p>
                                <p>Full Name: {result.fullName}</p>
                            </a>
                        )) : <div className="not-found">No groups found</div>
                        }
                    </div>
                    )}
                </DashboardSection>
                <ToastContainer />
            </div>
        );
    }
}

export default Dashboard;


{/*<div className="student-details">*/}
{/*    <div style={{ textAlign: 'center' }}>*/}
{/*        <PersonIcon style={{ fontSize: 100 }} />*/}
{/*        <h3><b>{mockData.fullName}'s Details</b></h3>*/}
{/*    </div>*/}
{/*    <div style={{ textAlign: 'center' }}>*/}
{/*        <h3>Your Full Name:</h3>*/}
{/*        <p>{mockData.fullName}</p>*/}
{/*        <h3>Your Email:</h3>*/}
{/*        <p>{mockData.email}</p>*/}
{/*        <h3>Your Group:</h3>*/}
{/*        <p>{mockData.group}</p>*/}
{/*    </div>*/}
{/*</div>*/}

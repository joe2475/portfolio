import react from 'react';
import {ListGroup, Container} from "react-bootstrap";
import './resume.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
function Resume() 
{
    return(
        <div>
            <Container>
            <h1>Resume</h1>
            <h2 className='header'>Education</h2>
            <ListGroup className='list' variant="flush">
            <ListGroup.Item>Masters of Computer Science with a focus in intelligent systems, The University of Texas at Dallas
                </ListGroup.Item>
                <ListGroup.Item>Bachelor of Software Engineering and Computer Science, The University of Texas at Dallas
                (3.25 GPA)
                August 20, 2017 - May 25, 2022</ListGroup.Item>
                <ListGroup.Item>Associate of Arts Criminal Justice, Eastfield Community College (3.3 GPA)
                January 17, 2015 – May 25, 2017</ListGroup.Item>
            </ListGroup>
            <h2 className='header'>Achievements</h2>
            <ListGroup className="list" variant="flush">
                <ListGroup.Item>Responsible Conduct of Research Certification (RCR)</ListGroup.Item>
                <ListGroup.Item>Principles Distinction Award Eastfield College</ListGroup.Item>
                <ListGroup.Item>The University of Texas at Dallas Transfer Scholarship</ListGroup.Item>
                <ListGroup.Item>University of Dallas Scholarship (unclaimed)</ListGroup.Item>
                <ListGroup.Item>UTD Hackathon VII MLH best use of Google Cloud winner</ListGroup.Item>
            </ListGroup>
            <h2 className="header">Group/Organizations</h2>
            <ListGroup className="list" variant="flush">
                <ListGroup.Item>Member of the IEEE organization</ListGroup.Item>
                <ListGroup.Item>Member of IEEE Dallas Section Government Relations Policy Committee</ListGroup.Item>
                <ListGroup.Item>IEEE Computer Society Member</ListGroup.Item>
                <ListGroup.Item>Google Developer Student Club</ListGroup.Item>
            </ListGroup>

            </Container>
        </div>
    )
}

export default Resume
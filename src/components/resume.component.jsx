import react from 'react';
import {ListGroup, Container} from "react-bootstrap";
import './resume.styles.scss'
function Resume() 
{
    return(
        <div>
            <Container>
            <h1>Resume</h1>
            <h2 className='header'>Education</h2>
            <ListGroup className='list' variant="flush">
                <ListGroup.Item>Bachelor of Software Engineering and Computer Science, The University of Texas at Dallas
                (3.17 GPA)</ListGroup.Item>
                <ListGroup.Item>Associate of Arts Criminal Justice, Eastfield Community College (3.3 GPA)
January 17, 2015 – May 25, 2017</ListGroup.Item>
            </ListGroup>
            </Container>
        </div>
    )
}

export default Resume
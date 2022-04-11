import react from "react";
import './project.styles.scss'; 
import {Container, Card, Row, Col, Image, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiFillDatabase, AiOutlineGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaServer, FaAws } from "react-icons/fa";
import { SiSplunk, SiDevpost } from "react-icons/si";
import { GrDocumentText } from "react-icons/gr";
import { motion } from "framer-motion";
const Project = () =>
(
   <Container>
       <h1 className="header">Projects</h1>
      <Row>
          <Col lg={6}>
          <Card className="mb-3">
              <Card.Header>
                  SQL Database Project
              </Card.Header>
           <Card.Body>
           <Card.Title><AiFillDatabase className="logo"/></Card.Title>
           <Card.Text>
           For this project I was given a set of requirements from a hypothetical business. 
           I was then tasked with creating a logical schema based on the requirements. 
           From there I converted the final logical schema to a physical schema that I would use to implement and create the database. 
           I used Oracle database to create the database. I inserted data to then run queries on. 
           <ListGroup>
               <ListGroup.Item>SQL</ListGroup.Item>
               <ListGroup.Item>Physical Schema</ListGroup.Item>
               <ListGroup.Item>Logical Schema</ListGroup.Item>
               <ListGroup.Item>Functional Dependency Diagram</ListGroup.Item>
               <ListGroup.Item>Oracle DB</ListGroup.Item>
           </ListGroup>
           </Card.Text>
           <Card.Footer>
             <a href="https://github.com/joe2475/SQL-Database-Project" target={"_blank"}><AiOutlineGithub/></a>
           </Card.Footer>
           </Card.Body>
       </Card>
          </Col>
          <Col lg={6}>
          <Card className="mb-3"> 
          <Card.Header>
                  Web-Sockets
              </Card.Header>
           <Card.Body>
           <Card.Title><FaServer className="logo"/></Card.Title>
           <Card.Text>
           This was a project from my computer networks class. Myself and another student worked on it. 
           The server would act as a proxy server and direct the user’s request to the intended site. 
           Once it had grabbed the webpage and returned it to the user it would then download and cache the webpage for future use. 
           <ListGroup>
               <ListGroup.Item>Python</ListGroup.Item>
               <ListGroup.Item>Computer Networking</ListGroup.Item>
               <ListGroup.Item>Socket Programming</ListGroup.Item>
               <ListGroup.Item>Caching</ListGroup.Item>
           </ListGroup>
           </Card.Text>
           <Card.Footer>
             <a href="https://github.com/joe2475/Web-Sockets-Project" target={"_blank"}><AiOutlineGithub/></a>
             <a href="https://portfoliobarsis.s3.us-east-2.amazonaws.com/Web+Sockets.pdf" target={"_blank"}><GrDocumentText/></a>
           </Card.Footer>
           </Card.Body>
       </Card>
          </Col>
          <Col lg={6}>
          <Card className="mb-3"> 
          <Card.Header>
                  AWS Web Server
              </Card.Header>
           <Card.Body>
           <Card.Title><FaAws className="logo"/></Card.Title>
           <Card.Text>
           This project was done in my software architecture class. I created a to-do application hosted on an AWS EC2 instance.
           Given the Apache Tomcat AMI I created an AWS EC2 instance to host the website. Then I created an RDS in AWS and attached it to MySQL on my own machine. 
            I then configured the webserver to connect to the database. Then I created an AMI with the new configuration and from that created two more instances. 
           Finally, I created an instance of the elastic load balancer and configured it to use the three instances. 
           </Card.Text>
           <Card.Footer>
           <a href="https://portfoliobarsis.s3.us-east-2.amazonaws.com/AWS+Project+SA.pdf" target={"_blank"}><GrDocumentText/></a>
           </Card.Footer>
           </Card.Body>
       </Card>
          </Col>
          <Col lg={6}>
          <Card className="mb-3"> 
          <Card.Header>
                  Splunk
              </Card.Header>
           <Card.Body>
           <Card.Title><SiSplunk className="logo"/></Card.Title>
           <Card.Text>
           I created a Splunk instance to practice and learn more about using Splunk. 
           An AWS EC2 instance was created to load Splunk on, and to also host the search head. 
           It was a small lab environment so both the indexer and search head were on the same instance. 
           I then configured Splunk to monitor the auth logs on the system. I could then use the public IP address of the server to access the search head and run queries. 
           Also, I created customs fields as well, and using regular expressions created a custom search to be saved for future use.
           <ListGroup>
               <ListGroup.Item>AWS</ListGroup.Item>
               <ListGroup.Item>Splunk</ListGroup.Item>
               <ListGroup.Item>Linux Command Line</ListGroup.Item>
               <ListGroup.Item>Computer Networks</ListGroup.Item>
           </ListGroup>
           </Card.Text>
           <Card.Footer>
           <a href="https://portfoliobarsis.s3.us-east-2.amazonaws.com/Splunk.pdf" target={"_blank"}><GrDocumentText/></a>
           </Card.Footer>
           </Card.Body>
       </Card>
          </Col>
          <Col lg={6}>
          <Card className="mb-3"> 
          <Card.Header>
          Recover Together UTD Hackathon VII Submission             
           </Card.Header>
           <Card.Body>
           <Card.Title><AiFillGoogleCircle className="logo"/></Card.Title>
           <Card.Text>
           I worked with a team of three others to create a solution to submit to the UTD Hackathon. 
           Our theme of the hackathon was helping the community after the massive winter event that took place here in Texas. 
           Our team created a web site that would allow users to find supply centers for water, power, and other necessities. 
           I worked on the map portion and was responsible for creating a way for users to search via address places that have services near them. 
           I also created information windows to display what services are offered at a certain location. We won the “MLH Best use of Google Cloud” category.  
           <ListGroup>
               <ListGroup.Item>React JS</ListGroup.Item>
               <ListGroup.Item>Google Cloud</ListGroup.Item>
               <ListGroup.Item>Google Maps API</ListGroup.Item>
               <ListGroup.Item>CSS, HTML, and JSX</ListGroup.Item>
           </ListGroup>
           </Card.Text>
           <Card.Footer>
           <a href="https://devpost.com/software/storm-recovery" target={"_blank"}><SiDevpost/></a>
           <a href="https://github.com/orgs/coolsupersquad/repositories" target={"_blank"}><AiOutlineGithub/></a>
           </Card.Footer>
           </Card.Body>
       </Card>
          </Col>
          
      </Row>
   </Container>


)
export default Project
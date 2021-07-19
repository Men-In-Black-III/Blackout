import React from "react";
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import raymond from "../../../assets/images/about_us_Raymond";
import diego from "../../../assets/images/about_us_Diego";
import guillermo from "../../../assets/images/about_us_guillermo";

const AboutUs = () => (
  <div className="wrapperDiv">
    <Container fluid={true}>
      <Row sm="3">
        <Col sm="4">
          <Card className="aboutus-card">
            <CardBody>
              <CardTitle tag="h2">Raymond Li</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Tech Lead
              </CardSubtitle>
            </CardBody>
            <img
              className="aboutus-img"
              src={raymond}
              alt="picture of Raymond"
            />
            <CardBody>
              <CardText>
                I began my self taught journey during the start of the
                COVID-pandemic and dove into the world of coding. Learning to
                code quickly taught me to ask meaningful questions, thoroughly
                understand the code, and most importantly to think as a problem
                solver.
              </CardText>
              <CardLink
                href="https://linkedin.com/in/raymondli1993"
                target="_blank"
              >
                LinkedIn
              </CardLink>
              <CardLink href="https://raymndli.com/" target="_blank">Raymond's Portfolio</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="aboutus-card">
            <CardBody>
              <CardTitle tag="h2">Diego Hernandes</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Design Lead
              </CardSubtitle>
            </CardBody>
            <img className="aboutus-img" src={diego} alt="photo of Diego" />
            <CardBody>
              <CardText>
                I am a software engineer seeking a position with where I can
                apply my past work experience and be an asset to the company as
                well as attain personal satisfaction as a front end developer.
              </CardText>
              <CardLink href="https://linkedin.com/in/dgohdz" target="_blank">LinkedIn</CardLink>
              <CardText>Work in progress</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="aboutus-card">
            <CardBody>
              <CardTitle tag="h2">Guillermo Garcia</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Product Manager
              </CardSubtitle>
            </CardBody>
            <img
              className="aboutus-img"
              src={guillermo}
              alt="photo of Guillermo"
            />
            <CardBody>
              <CardText>
                hello my name is guillermo i have spent the last couple of years
                working in the law enforcement/security industry until i
                recently found my true passion in web development because of the
                mixture between creativity and technical skills needed
              </CardText>
              <CardLink href="https://linkedin.com/in/guillermo-garcia-040255215" target="_blank">LinkedIn</CardLink>
              <CardText>Work in progress</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUs;

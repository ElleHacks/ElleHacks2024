import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Red from "../assets/Red.png";
import Card from 'react-bootstrap/Card';
import "./MeetOurSponsors.css"


function MeetTheTeam() {

  return (
    <div className="App" id="meet-our-sponsors-section">
      <div class="container-fluid-xl"></div>
        <h2 class="sponsor-heading">
          Meet Our Sponsors
        </h2>

        <div  id="sponsors">
            <div class="sponsors-container">
                <div class="gold-sponsors">
                    <h3>Gold Sponsors</h3>
                    <Container className="d-flex justify-content-center">
                      <Row>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="custom-card">
                            <Card.Img variant="top" src={Red} />
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                </div>
                <div class="silver-sponsors">
                    <h3>Silver Sponsors</h3>
                    
                </div>
                <div class="bronze-sponsors">
                    <h3>Bronze Sponsors</h3>
                    
                </div>
                <div class="community-sponsors">
                    <h3>Community Sponsors</h3>
                </div>
            </div>
          </div>
    </div>
  );
}

export default MeetTheTeam;

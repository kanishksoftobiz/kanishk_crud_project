import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="card text-white bg-black mt-4">
        <Container>
          <Row>
            <Col className="text-center text-capitalize py-3">
              copyright &copy; kanishk kumar
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

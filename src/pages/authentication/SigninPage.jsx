import React from "react";
import {Row, Col, Container, Card } from "react-bootstrap";

import LoginForm from "./LoginForm";

export const SignInPage = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h2>Login to Your Account</h2>
              </Card.Title>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;

import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

const Payment = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="paypal"
              name="paymentMethod"
              value="PayPal"
              checked
              // onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="success">
          CONTINUE
        </Button>
      </Form>
    </Container>
  );
};

export default Payment;

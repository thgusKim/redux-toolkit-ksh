import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, pw));
    // setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPw(event.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

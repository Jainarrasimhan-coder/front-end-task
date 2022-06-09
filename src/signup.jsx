import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { login, signUp, updateUser } from "./models/auth";
import { useNavigate,Link } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",

  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    if(!state.email||!state.username||!state.password){
      window.alert("Please fill out all the fields")
      return
    }
    try{
      e.preventDefault();
      const data = {
        name: state.username,
        email: state.email,
        password: state.password
      };
      console.log("data", data);
      const response = await signUp(data);
      console.log('response', response)
      if(response){
        window.alert(`${response.message}`)
            console.log("response", response)
            navigate('/login')
        }
    } catch(err){
      window.alert(` ${err.data.error}`)

      console.log("Error", err);
    }
  };

  return (
    <Container className="pt-5">
        <h1 className="d-flex justify-content-center">Sign up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={state.username}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleOnChange}
          />
        </Form.Group>

      

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
              
  <h5>
      <Link to="/login"className="d-flex justify-content-center pt-3">Already have account</Link>
  </h5>
    </Container>
  );
};

export default Signup;

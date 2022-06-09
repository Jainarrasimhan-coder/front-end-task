import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { login, signUp, updateUser } from "./models/auth";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!state.email||!state.password){
      window.alert("Please fill out all the fields")
      return
    }
    const data = {
      email: state.email,
      password: state.password,
    };
    console.log("data", data);
    const response = await login(data);
    if (response.status === 200) {
      console.log("response", response)
      localStorage.setItem("token", response.data.token)
      dispatch({
          type: "USER_DETAIL",
          payload: response.data.data
      })
      window.location.href="/option"
    } else {
      window.alert(`${response.data.error}`)
      console.log("errorresponse", response);
    }
  };
  return (
    <Container className="pt-5">
              <h1 className="d-flex justify-content-center">Login</h1>

      <Form onSubmit={handleLogin}>
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
      <Link to="/" className="d-flex justify-content-center pt-3">Dont have an account</Link>
  </h5>
    </Container>
  );
};

export default Login;

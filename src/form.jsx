import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { createPosts } from "./models/auth";
import { useDispatch } from "react-redux";

import { useNavigate,Link } from "react-router-dom";

const Forms = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    designation: "",
    reminder: false,
    date: "",
    day:"",
    reminderStatus: "No"
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("entered herer")
    const data = {
      name: state.name,
      designation: state.designation,
      date:state.date,
      day:state.day,
      reminder: state.reminderStatus
    }
console.log(data)
    const response = await createPosts(data);
    if(response){
      window.alert("post saved successfully")
    }
  };

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Container className="pt-5">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Designation
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="designation"
              name="designation"
              value={state.designation}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Row>
            <Form.Label as="legend" column sm={2}>
              Days
            </Form.Label>

            <Col column sm={2} className="mb-3 pt-2">
              <Form.Select aria-label="Default select example"
               type="day"
               name="day"
               value={state.day}
               onChange={(e)=>{console.log("e", e.target.value)}}>
                <option>Day</option>
                <option value="1">Day</option>
                <option value="2">Week</option>
                <option value="3">Month</option>
              </Form.Select>
            </Col>
            <Col column sm={2} className="mb-3 pt-2">
              <Form.Select aria-label="Default select example" 
                type="date"
                name="date"
                value={state.date}
              onChange={(e)=>{console.log("e", e.target.value)}}>
                <option>05</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Row>
              <Form.Label as="legend" column sm={2}>
                Reminder
              </Form.Label>

              <Col column sm={2} className="mb-3 pt-2">
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="Yes"
                  checked={state.reminder === true}
                  id="formHorizontalRadios1"
                  onChange={()=>setState({...state, reminder: !state.reminder, reminderStatus: "Yes"})}
                />
              </Col>
              <Col column sm={2} className="mb-3 pt-2">
                {" "}
                <Form.Check
                  type="radio"
                  label="No"
                  name="No"
                  checked={state.reminder === false}
                  id="formHorizontalRadios2"
                  onChange={()=>setState({...state, reminder: !state.reminder, reminderStatus: "No"})}
                />
              </Col>
            </Row>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={handleOnSubmit}>Submit</Button>
          </Col>
        </Form.Group>
      </Form>
      <h5>
      <Link to="/option" className="d-flex justify-content-center pt-3">Mainpage</Link>
  </h5>
      <Link  to="/login"className="d-flex justify-content-center pt-3"     onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
      
    }}>Sign out</Link>
     
    </Container>
  );
};

export default Forms;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { gold, diamond, platinum } from "./utils/constant.utils";
import { getUser, login, signUp, updateUser } from "./models/auth";
import { useNavigate,Link } from "react-router-dom";

const Cards = () => {
  const navigate=useNavigate();
  const [state, setState] = useState({
    gold: false,
    diamond: false,
    platinum: false,
  });
  const user = useSelector((state) => state.user.user);
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetUser(id);
  }, []);

  const handleGetUser = async (id) => {
    const response = await getUser({ user_id: id });
    if (response.status === 200) {
      console.log("response in getUser", response);
      if (response.data.data.plan === "Gold") {
        setState({ ...state, gold: false, diamond: true, platinum: false });
      } else if(response.data.data.plan === "Diamond"){
        setState({ ...state, gold: false, diamond: false, platinum: true });
      } else if(response.data.data.plan === "Platinum") {
        setState({ ...state, gold: false, diamond: false, platinum: false });
      } else {
        setState({ ...state, gold: true, diamond: false, platinum: false });
      }
      dispatch({
        type: "USER_DETAIL",
        payload: response.data.data,
      });
    }
  };

  const handleUpdateUser = async (type) => {
    const data = {
      user_id: user?._id,
      plan: type,
    };
    const response = await updateUser(data);
    if (response.status === 200) {
      console.log("response", response);
      if (response.data.data.plan === "Gold") {
        setState({ ...state, gold: false, diamond: true, platinum: false });
      } else if(response.data.data.plan === "Diamond"){
        setState({ ...state, gold: false, diamond: false, platinum: true });
      } else if(response.data.data.plan === "Platinum") {
        setState({ ...state, gold: false, diamond: false, platinum: false });
      } else {
        setState({ ...state, gold: true, diamond: false, platinum: false });
      }
      dispatch({
        type: "USER_DETAIL",
        payload: response.data.data,
      });
    } else {
      console.log("Errorresponse", response);
    }
  };

  return (
    <Container>
      <Card className="mt-5">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>{`user name:  ${user?.name}`}</Col>
                  <Col>{`user mail id:  ${user?.email}`}</Col>
                </Row>
                <Row>
                  <Col>{`user phone number:  ${user?.phone_number}`}</Col>
                  <Col>{`user current plan:  ${user?.plan}`}</Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="pt-5">
              <Card.Img variant="top" src={gold} />
              <Card.Body>
                <Card.Title>Gold</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {state.gold && (
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateUser("Gold")}
                  >
                    Upgrade
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="pt-5">
              <Card.Img variant="top" src={diamond} />
              <Card.Body>
                <Card.Title>Diamond</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {state.diamond && (
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateUser("Diamond")}
                  >
                    Upgrade
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="pt-5">
              <Card.Img variant="top" src={platinum} />
              <Card.Body>
                <Card.Title>Platinum</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                {state.platinum && (
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateUser("Platinum")}
                  >
                    Upgrade
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
      <h5>
      <Link  to="/login"className="d-flex justify-content-center pt-3"     onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
      
    }}>Sign out</Link>
  </h5>
    </Container>
  );
};

export default Cards;

import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row,Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./models/auth";
import { useNavigate,Link } from "react-router-dom";

const Posts = () => {
  const [state, setState] = useState({});
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);


  const dispatch = useDispatch();

  useEffect(() => {
    handleGetPosts();
  },[]);

  const handleGetPosts = async () => {
    const response = await getAllPosts();
    console.log("response", response)
    if(response.status){
      dispatch({
        type: "GET_ALL_POSTS",
        payload: response.data.posts
      })
    } else {
      console.log("Errorresponse", response)
    }
    setdata(response.data.posts)

    setloading(false)

  };
if(loading){
 return <div>Data is still loading</div>
}
if(!loading){
  console.log(data)
  return (
    <div>
      <Container className="pt-5">
      <Row>
        {
          data.map((value)=>{
            return    <Col md={4}className="p-3">
            <Card style={{ width: "18rem" }} >
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>{value.designation}</Card.Text>
                {/* <Card.Text>{value.}</Card.Text> */}
                <Card.Text>{value.reminder}</Card.Text>
              </Card.Body>
            </Card>
            </Col>
          })
        }
   
     
      
      </Row>
      <h5>
      <Link to="/option" className="d-flex justify-content-center pt-3">Mainpage</Link>
  </h5>
      <Link  to="/login"className="d-flex justify-content-center pt-3"     onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
      
    }}>Sign out</Link>
    </Container>
    
     
    </div>
  );
}
 
};

export default Posts;

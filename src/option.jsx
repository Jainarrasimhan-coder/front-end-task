import React from 'react';
import {Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";

// import {useNavigate} from 'react-router-dom' 
import { useNavigate,Link } from "react-router-dom";

const Option = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div><Button className="m-5" onClick={() => navigate('/posts')}> View All posts</Button>
    <Button className="m-5" onClick={() => navigate('/create')}>Create post</Button>
    <Link  to="/login"className="d-flex justify-content-center pt-3"     onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
      
    }}>Sign out</Link></div>
    
  )
}

export default Option
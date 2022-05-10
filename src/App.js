import React from 'react';
import { useState, useEffect, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import Form from './components/Form';
import AddPost from './components/AddPost';
import Footer from './components/Footer';

function App() {
  const currentPost= useRef();
  const [show, setShow] = useState(false);
  const [postChange, setPostChange] = useState(false);
  const axios = require('axios');
  const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog';

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    currentPost.current = null;
  };

  const newPost = () => {
    axios.post(baseURL,{
        // titleInput,
        // imageInput,
        // textInput
    })
    .then(response=>{
        console.log(response.data);
    })
    //then redirect to main?
}

  //axios put request
  const updatePost = () => {
    axios.put(baseURL+'/'+currentPost.current._id,{
        // titleInput,
        // imageInput,
        // textInput
    })
    .then(response=>{
        console.log(response.data);
    })
    //then redirect to main?
}

  //axios delete request
  const deletePost = () => {
      axios.delete(baseURL+'/'+currentPost.current._id)
      .then(response=>{
          //redirect to main?
      })
  }



  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <AddPost />
      <PostContainer currentPost={currentPost} 
      setShow={setShow} 
      postChange={postChange}
      setPostChange={setPostChange} 
      />

      <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {currentPost.current?currentPost.current.title:"Add New Post"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        MODAL BODY HERE
      {/* <Form/> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{
          if(currentPost.current) {
            newPost();
          }else{
            updatePost();
          }
           setPostChange(old=>!old);
            handleClose();
          }}>
          Submit
        </Button>
        <Button variant="secondary" onClick={()=>{
          //add delete function here
          deletePost();
          setPostChange(old=>!old);
          handleClose();
        }}>
          Delete
        </Button>
      </Modal.Footer>
      </Modal>
      
      <Footer/>
    </div>
  );
}

export default App;
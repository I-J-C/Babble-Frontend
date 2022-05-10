import React from 'react';
import { useState, useEffect} from 'react';
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
  const [currentPost, setCurrentPost] = useState();
  const [show, setShow] = React.useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <AddPost />
      <PostContainer setCurrentPost={setCurrentPost} currentPost={currentPost} setShow={setShow} />
      {/* <Modal modalOn={modalOn} currentPost={currentPost} setCurrentPost={setCurrentPost} closeModal={closeModal} /> */}

      <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {currentPost?currentPost.title:"Add New Post"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        MODAL BODY HERE
      {/* <Form/> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
      
      <Footer/>
    </div>
  );
}

export default App;
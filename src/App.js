import React from 'react';
import { useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import BlogForm from './components/BlogForm';
import AddPost from './components/AddPost';
import Footer from './components/Footer';

function App() {
  const currentPost= useRef();
  // const textInput = useRef();
  // const titleInput = useRef();
  // const imageInput = useRef();
  const [show, setShow] = useState(false);
  const [postChange, setPostChange] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    currentPost.current = null;
  };

//   const newPost = () => {
//     axios.post(baseURL,{
//         // titleInput,
//         // imageInput,
//         // textInput
//     })
//     .then(response=>{
//         console.log(response.data);
//     })
//     //then redirect to main?
// }

//   //axios put request
//   const updatePost = () => {
//     axios.put(baseURL+'/'+currentPost.current._id,{
//         // titleInput,
//         // imageInput,
//         // textInput
//     })
//     .then(response=>{
//         console.log(response.data);
//     })
//     //then redirect to main?
// }

//   //axios delete request
//   const deletePost = () => {
//       axios.delete(baseURL+'/'+currentPost.current._id)
//       // .then(response=>{
//       //     //redirect to main?
//       // })
//   }


  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <AddPost handleShow={handleShow} />
      <PostContainer currentPost={currentPost} 
      setShow={setShow} 
      postChange={postChange}
      setPostChange={setPostChange} 
      />
  {/* <div className='modal'> */}
  <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {currentPost.current?currentPost.current.title:"Add New Post"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BlogForm currentPost={currentPost} 
          setPostChange={setPostChange} 
          handleClose={handleClose}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
      <Footer/>
  {/* </div> */}  
    </div>
  );
}

export default App;
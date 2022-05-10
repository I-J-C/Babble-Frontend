import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import Modal from './components/Modal';
import AddPost from './components/AddPost';
import Footer from './components/Footer';

function App() {
  const [currentPost, setCurrentPost] = useState();
  const [modalOn, setModalOn] = useState(false);

  const openModal = () => {
    setModalOn(old => !old);
  }

  const closeModal = () => {
    setModalOn(old => !old);
  }

  // useEffect(()=>{

  // }, [modalOn])

  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <AddPost />
      <PostContainer setCurrentPost={setCurrentPost} openModal={openModal} />
      <Modal modalOn={modalOn} currentPost={currentPost} setCurrentPost={setCurrentPost} closeModal={closeModal} />
      <Footer/>
    </div>
  );
}

export default App;
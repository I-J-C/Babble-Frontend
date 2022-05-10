import React from 'react';
import { useState } from 'react';
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
    setModalOn(old => true);
  }

  const closeModal = () => {
    setModalOn(old => false);
  }

  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <AddPost />
      <PostContainer setCurrentPost={setCurrentPost} />
      <Modal currentPost={currentPost} modalOn={modalOn} />
      <Footer/>
    </div>
  );
}

export default App;
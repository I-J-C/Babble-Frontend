import React from 'react';
import './App.css';
import Header from './components/Header';
// import PostContainer from './components/postContainer';
// import AddPost from './components/addPost';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

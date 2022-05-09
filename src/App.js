import React from 'react';
import './App.css';
import Header from './components/Header';
// import PostContainer from './components/PostContainer';
// import AddPost from './components/AddPost';
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
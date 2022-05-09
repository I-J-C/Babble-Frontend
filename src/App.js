import React from 'react';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import AddPost from './components/AddPost';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div>
  );
}

export default App;

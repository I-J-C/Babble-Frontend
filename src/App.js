import Header from './components/Header';
import PostContainer from './components/PostContainer';
import AddPost from './components/AddPost';
import Footer from './components/Footer';
import './App.css';
const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <PostContainer />
    </div>
  );
}

export default App;

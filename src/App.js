import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';

import ReactDOM from 'react-dom';
import axios from 'axios';
import Posts from './Post';
import Pagination from './pagination';
import './styles.css';

import CComponent from './Ccomponent'; 

function App() {
  const messages = ['hel1','hel2'];
 
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPost(response.data);
      setLoading(false);
    };

    fetchPost();

    return setLoading(() => false);
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // posts view per page
  const handlePaginate = pageIndex => setCurrentPage(pageIndex);


  // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(response => response.json())
    //     .then(json => { setPosts(json)})
    // }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Поймай кнопку.
        </a>
        <CComponent name="Test" />
        {/* <h2> {messages.map((el, index, messages)=>(<div> {el} </div>)) 
        } </h2> */}

        {/* { <h2> {posts.map(item=>(<div> {[item.id,'. ' , item.title]} </div>)) 
        } </h2> } */}
        <div className="container mt-5">
          <h1 className="text-primary mb-3 text-center">React Pagination</h1>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={handlePaginate}
          />
        </div>

        

        <Button count="5" children1="Давай еще " enable children2="раз!!!" ></Button>
        
      </header>
    </div>
  );

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;

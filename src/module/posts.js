import React, {useEffect, useState} from 'react';
import '../App.css';


import ReactDOM from 'react-dom';
import axios from 'axios';
import Pagination from './pagination';
import '../styles.css';
import s from '../posts.module.css';
import { Link } from 'react-router-dom'

function Posts() { 
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



  return (



    <div className="container mt-5">
        <h1 className="text-primary mb-3 text-center">React Pagination</h1>
        <ul className={s.list_group}>
            {currentPosts.map(post => (
                <li key={post.id} className={s.list_group_item}>
                  <Link className={s.list_group_item} to={`/posts/${post.id}`} >{[post.id,'. ' , post.title]}</Link>
                </li>
            ))}
        </ul>
        {console.log(postsPerPage)}
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={handlePaginate}
        />
    </div>
  );

}

export default Posts;

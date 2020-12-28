import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import s from './posts.module.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Router>
    <div> 
    <ul className={s.list_group}>
      {posts.map(post => (
        <li key={post.id} className={s.list_group_item}>
          <Link className={s.list_group_item} to={`/${post.id}`} >{[post.id,'. ' , post.title]}</Link>
        </li>
      ))}
    </ul>
     {
            


      posts.map(post=>(
     
      <Switch>
           <Route path={`/${post.id}`}>
           <div className={s.item}>{[post.id,'. ' , post.title,' - ' , post.body]}</div>
           </Route>
      </Switch>
      )) 
     
    }
    </div>
    </Router>
  );
};

export default Posts;

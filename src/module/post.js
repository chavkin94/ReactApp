import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Post = (props) => {

    const id = props.match.params.id;

    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    const string_get = 'https://jsonplaceholder.typicode.com/posts/' + id+'/comments';

    useEffect(() => {
      const fetchPost = async () => {
      setLoading(true);
      const response = await axios.get(
        string_get
      );
      setPost(response.data);
      setLoading(false);
      };

      fetchPost();

      return setLoading(() => false);
  }, []);

  return (
    <div>
        <h2> {posts.map(item=>(
        <div> {[item.id,'. ' , item.name,'. Email: ' ,item.email] } </div>
        )) 
        } </h2>
        <Link to='/posts' >Назад</Link>
    </div>
  )
}

export default Post

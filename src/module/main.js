import React, {useEffect, useState} from 'react';
import '../App.css';
import Posts from './posts'
import Post from './post'
import '../styles.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";


function Main() {
    return (
        <Switch>
            <Route exact path='/posts' component={Posts}/>
            <Route path='/posts/:id' component={Post}/>            
        </Switch>
  );
}

export default Main;
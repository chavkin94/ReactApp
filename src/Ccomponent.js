import React, { Component } from 'react'
import Home from './home';
import USER from './User';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default class CComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <Router>
            <div>
              <nav>
                <ul class="list-group mb-4">
                  <li class="list-group-item">
                    <Link to="/" >Home</Link>
                  </li>
                  <li class="list-group-item">
                    <Link to="/users" >User</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/users">
                  <USER />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
          )
    }

}
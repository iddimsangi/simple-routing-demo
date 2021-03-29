import React from 'react';
import {useRouteMatch, Link, Switch,Route } from 'react-router-dom';
import User from './User/User';

const Users = () =>{
    let { path, url } = useRouteMatch();
    return(
        <div>
            <h1>Users Page</h1>
        <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
         <User />
        </Route>
      </Switch>
        </div>
        
    );
}
export default Users;
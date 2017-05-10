import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home.jsx'
import Player from './Player.jsx'

const Main = () => (
  <Router>
    <div>
      <div className="col-left">
        <div className="window">
          <div className='user'>
            <p className="text-center from-top">Please
              <a href="/api/login" className="btn btn-xs btn-success login-link">login</a>
              in order to use all features of this app!</p>
          </div>

        </div>
        <div className='genres'></div>
        <Player/>

      </div>
      
      <Route exact path='/' component={Home}/>
      <Route path='/album/:id' component={Home}/>
      <Route path='/artist/:id' component={Home}/>
      <Route path='/playlist/:id' component={Home}/>
    </div>
  </Router>
);

export default Main;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import PlayerImage from './Player.jsx';
import PlayerBottom from './PlayerBottom.jsx';
import Album from './Album.jsx';
import Artist from './Artist.jsx';

const Main = () => (
  <Router>
    <div className="browser-window">
      <div className="content">
        <div className="col-left">
          
          <div className="window">
            <div className='logo'>
            <Link to="/"><i className="fa fa-headphones" aria-hidden="true"></i> wyDux</Link>
            </div>
            <div className="user">
            <p className="text-center from-top">Please <a href="/api/login" className="btn btn-xs btn-success login-link">login</a> in order to use all features of this app!</p>
          </div>
            <PlayerImage />
          </div>
        </div>


        <Route exact path="/" component={Home} />
        <Route path="/album/:id" component={Album} />
        <Route path="/artist/:id" component={Artist} />
        <Route path="/playlist/:id" component={Home} />

      </div>
      <PlayerBottom  />
    </div>
  </Router>
);

export default Main;

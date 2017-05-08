import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Right from './Right.jsx'

const Main = () => (
  <Router>
      <div>
          <div className="col-left">
              <div className="window">
                  <p className="text-center from-top">Please <a href="http://localhost:8080/api/login" className="btn btn-xs btn-success login-link">login</a> in order to use all features of this app!</p>
                </div>
              <div className="player">
                  <div className="track-img row text-center">
                      <img alt="track logo" className="img-unwrapped" src={'http://blueroom.org.au/wp-content/uploads/2016/12/BLANK_SN-Website-760x485.jpg'/* this.props.trackIMG!=='' ? this.props.trackIMG : 'http://blueroom.org.au/wp-content/uploads/2016/12/BLANK_SN-Website-760x485.jpg'*/} />
                    </div>

                  <button className="btn btn-success play-btn btn-xs">{/* this.props.isPlaying ? 'Stop' : 'Play'*/'Play'}</button>
                </div>
            </div>
          <Right/>
        </div>
    </Router>
);

export default Main;

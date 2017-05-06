import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


const Main = () => (
    <Router>
        <div className="row">
            <div className='col col-xs-4'>
                <div className="window">
                </div>
                <div className="player">
                </div>
            </div>
            <div className='col col-xs-8'>

            </div>
        </div>
    </Router>
);

export default Main;

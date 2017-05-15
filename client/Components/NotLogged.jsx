import React from 'react';


const NotLogged = () => (
  <div className="user">
    <p className="text-center from-top">Please <a href="/api/login" disabled={true}className="btn btn-xs btn-success login-link">login</a> in order to use all features of this app!</p>
  </div>
);



export default NotLogged;

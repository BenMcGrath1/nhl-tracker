import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <Link to='/register' class='btn btn-primary'>
      Sign Up
    </Link>
    <Link to='/login' class='btn btn-light'>
      Login
    </Link>
  </div>
);

export default Landing;

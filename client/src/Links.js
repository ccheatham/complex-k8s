import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <a href="https://cheds-bucket.s3.us-east-1.amazonaws.com/chedcheatham-2019.pdf" target="_blank">Ched's CV/Resume</a>
      <br />
      <Link to="/">Go back home</Link>
    </div>
  );
};

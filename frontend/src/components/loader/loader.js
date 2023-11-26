import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div>
      <div className="loader"></div>
      <div className="shadow"></div>
      <div className="logo">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/MDlogo.svg"
          alt="Mario Designs"
        />
      </div>
    </div>
  );
};

export default Loader;

// src/components/PageLoader/PageLoader.jsx
import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="wave-bars-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default PageLoader;

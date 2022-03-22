import React from 'react';
import '../styles/styles.css';
const Loader = () => {
  return (
    <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text textAnchor="middle" x="50%" y="80%">
        #CulSecDheeraj
      </text>
    </symbol>
    <g className="g-ants">
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
    </g>
  </svg>
  );
};

export default Loader;

import React from 'react';

import './Navigation.css';

const SUPPORTED_ENDPOINTS = ['users', 'posts'];

const Navigation = ({ onEndpointSelect, selectedEndpoint }) => (
  <ul>
    {SUPPORTED_ENDPOINTS.map(endpoint => (
      <li
        key={endpoint}
        className={`navigation-item ${endpoint === selectedEndpoint ? 'active' : ''}`}
        onClick={() => onEndpointSelect(endpoint)}
      >
        {endpoint}
      </li>
    ))}
  </ul>
);

export default Navigation;

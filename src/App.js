import React, { useState } from 'react';

import './App.css';
import Content from './Content';
import Navigation from './Navigation';

const App = () => {
  const [endpoint, selectEndpoint] = useState();

  return (
    <div className="app">
      <h1>API Browser</h1>

      <div className="app-row">
        <div className="app-column app-navigation">
          <Navigation onEndpointSelect={selectEndpoint} selectedEndpoint={endpoint} />
        </div>

        <div className="app-column app-content">
          <Content selectedEndpoint={endpoint} />
        </div>
      </div>
    </div>
  );
};

export default App;

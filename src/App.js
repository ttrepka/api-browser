import React, { useState } from 'react';

import './App.css';
import Endpoint from './endpoint/Endpoint';
import Navigation from './navigation/Navigation';

const App = () => {
  const [endpoint, selectEndpoint] = useState();

  return (
    <div className="app">
      <h1>API Browser</h1>

      <div className="app-row">
        <div className="app-column app-navigation">
          <h2>Endpoints</h2>
          <Navigation onEndpointSelect={selectEndpoint} selectedEndpoint={endpoint} />
        </div>

        <div className="app-column app-content">
          <h2>{endpoint || 'No endpoint selected'}</h2>
          {endpoint && <Endpoint key={endpoint} selectedEndpoint={endpoint} />}
        </div>
      </div>
    </div>
  );
};

export default App;

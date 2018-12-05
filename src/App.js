import React from 'react';

import './App.css';
import Content from './Content';
import Navigation from './Navigation';

const App = () => (
  <div className="app">
    <h1>API Browser</h1>

    <div className="app-row">
      <div className="app-column app-navigation">
        <Navigation />
      </div>

      <div className="app-column app-content">
        <Content />
      </div>
    </div>
  </div>
);

export default App;

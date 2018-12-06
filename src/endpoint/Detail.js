import React from 'react';

import './Detail.css';

const Detail = ({ data }) => (
  <div className="detail">
    <pre className="detail-json">{JSON.stringify(data, null, 4)}</pre>
  </div>
);

export default Detail;

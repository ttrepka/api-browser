import React from 'react';

const Detail = ({ data }) => (
  <div className="gallery-detail">
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </div>
);

export default Detail;

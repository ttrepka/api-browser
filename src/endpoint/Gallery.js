import React, { useState } from 'react';

import './Gallery.css';
import Detail from './Detail';

// mappings to know which value from data to display in the gallery view
const ENDPOINT_MAPPINGS = { users: 'username', posts: 'title' };

const Gallery = ({ data, endpoint }) => {
  const [selectedItem, selectItem] = useState();
  const itemKey = ENDPOINT_MAPPINGS[endpoint];

  return (
    <ul className="gallery">
      {data.map((item, index) => {
        const value = item[itemKey];
        const isOpen = selectedItem === index;

        return (
          <li
            key={`${value}-${index}`}
            className={`gallery-item ${isOpen ? 'is-open' : ''}`}
            onClick={() => selectItem(isOpen ? null : index)}
          >
            <span className="gallery-item-heading">{value}</span>
            {isOpen && <Detail />}
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;

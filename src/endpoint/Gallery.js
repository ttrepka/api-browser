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
      {data.map(item => {
        const value = item[itemKey];
        const isOpen = selectedItem === item.id;

        return (
          <li key={item.id} className={`gallery-item ${isOpen ? 'is-open' : ''}`}>
            <div
              className="gallery-item-heading"
              onClick={() => selectItem(isOpen ? null : item.id)}
            >
              {value}
            </div>
            {isOpen && <Detail data={item} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;

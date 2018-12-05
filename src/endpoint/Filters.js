import React, { useState } from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const [field, updateField] = useState('');
  const [value, updateValue] = useState('');

  const canFilter = field && value;
  const canReset = field || value;

  return (
    <div className="filters">
      <div>
        <select onChange={e => updateField(e.target.value)} value={field}>
          <option value="">-- Select field --</option>
          {filters.map(filter => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <input
          onChange={e => updateValue(e.target.value)}
          placeholder="Type regex"
          type="text"
          value={value}
        />
      </div>

      <div>
        <button disabled={!canFilter} onClick={() => onFilterChange(field, value)} type="submit">
          Filter
        </button>
        <button
          disabled={!canReset}
          onClick={() => {
            updateField('');
            updateValue('');
            onFilterChange('', '');
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;

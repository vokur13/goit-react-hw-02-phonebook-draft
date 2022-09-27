import React from 'react';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const filterID = nanoid();

  return (
    <div>
      <label htmlFor={filterID}>Find contacts by name</label>
      <input id={filterID} type="text" value={value} onChange={onChange} />
    </div>
  );
};

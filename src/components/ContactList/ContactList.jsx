import React from 'react';

export const ContactList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id} style={{ display: 'flex' }}>
          <p style={{ marginRight: '5px' }}>{item.name + ':'}</p>
          <p>{item.number}</p>
        </li>
      ))}
    </ul>
  );
};

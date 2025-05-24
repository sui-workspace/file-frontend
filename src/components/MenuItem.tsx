import React from 'react';

function MenuItem({ item, onClick }) {
  let a: number = 1;
  return (
    <div
      className="menu-item"
      onClick={() => onClick(item)}
    >
      {item.name}
    </div>
  );
}   
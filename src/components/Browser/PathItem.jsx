import React from 'react';

const PathItem = ({ item, index, onPathItemClick }) => {
  return (
    <span
      style={{ paddingRight: 5, cursor: 'pointer', color: '#5f9ea0' }}
      onClick={() => onPathItemClick(item, index)}
    >
      {item.name}
    </span>
  )
}

export default PathItem;

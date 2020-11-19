import React from 'react';
import FolderItem from './FolderItem';

const FolderView = ({ data, parent, onSelect }) => {
  const contentData = parent
    ? [{ name: '..', children: parent.children }, ...data]
    : data;
  return (
    <>
      {
        contentData && contentData.map((item, i) => (
          <FolderItem
            key={i}
            node={item}
            onSelect={onSelect}
          />)
        )
      }
    </>
  )
};

export default FolderView;

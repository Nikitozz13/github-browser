import React from 'react';

const TreeItem = ({onSelect, style, customStyles, node}) => {
  const iconType = node.children
    ? node.toggled ? 'folder-open' : 'folder'
    : 'file-text';
  const iconClass = `fa fa-${iconType}`;
  const iconStyle = { marginRight: '5px' };

  return (
    <div style={style.base} onClick={onSelect}>
      <span style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}>
        <i className={iconClass} style={iconStyle}/>
        {node.name}
      </span>
    </div>
  );
};

export default TreeItem;

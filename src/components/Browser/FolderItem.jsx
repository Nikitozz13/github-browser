import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  padding: 5px;
  font-size: 1.3em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const FolderItem = ({ onSelect, node }) => {
  const iconType = node.children
    ? node.toggled ? 'folder-open' : 'folder'
    : 'file-text';
  const iconClass = `fa fa-${iconType}`;
  const iconStyle = { marginRight: '15px' };

  return (
    <Item onClick={() => onSelect(node)}>
      <i className={iconClass} style={iconStyle}/>
      {node.name}
    </Item>
  );
};

export default FolderItem;

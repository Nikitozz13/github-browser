import React, { useState } from 'react';
import { Treebeard, decorators, theme } from 'react-treebeard';
import TreeItem from './TreeItem';

const TreeView = ({
  data = [],
  onTreeToggle = () => {},
  onFileSelect = () => {}
}) => {
  const [cursor, setCursor] = useState(false);
  
  const onToggle = async (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    if (node.url) {
      onFileSelect(node.url);
    }
    setCursor(node);
    onTreeToggle(data);
  }

  const treeStyle = {
    ...theme,
    tree: {
      ...theme.tree,
      base: {
        ...theme.tree.base,
        minHeight: '100%',
        padding: '10px 10px 20px 10px'
      },
    }
  };
  
  return (
    <Treebeard
      style={treeStyle}
      data={data}
      decorators={{ ...decorators, Header: TreeItem }}
      onToggle={onToggle}
    />
  )
}

export default TreeView;

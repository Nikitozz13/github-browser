import React from 'react';

const FileView = ({ fileText }) => {
  if (!fileText) return null;

  const contentText = fileText
    .split('\n')
    .map((line, i) => <plaintext key={i}>{line}</plaintext>)

  return contentText;
}

export default FileView;

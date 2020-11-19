import React from 'react';
import PathItem from './PathItem';

const PathsView = ({ data, onPathItemClick }) => {
  return (
    <>
      {
        data && !!data.length &&
        data.map((current, i) => {
          const renderItem = data.length - 1 === i
            ? <span>{current.name}</span>
            : (
              <PathItem
                item={current}
                index={i}
                onPathItemClick={onPathItemClick}
              />
            );
          return (
            <React.Fragment key={i}>
              <span>/ </span>
              {renderItem}
            </React.Fragment>
          );
        })
      }
    </>
  )
}

export default PathsView;

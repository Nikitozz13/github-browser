import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TreeView from './TreeView';
import FileView from './FileView';
import FolderView from './FolderView';
import PathsView from './PathsView';
import { fetchTreeData, fetchFileData } from '/src/components/Common/ApiServices';
import {
  Header,
  RepositoryTitle,
  RepositoryPath,
  BrowserContainer,
  TreeViewContainer,
  FileViewContainer
} from './styling';

const Browser = ({ match, location }) => {
  const { params: { owner, repo } } = match;

  const defaultData = {
    name: 'master',
    url: `https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=true`,
    toggled: true,
    loading: true,
    children: []
  };

  const [data, setData] = useState(defaultData);
  const [fileText, setFileText] = useState('');
  const [pathHistory, setPathHistory] = useState([]);

  useEffect(async () => {
    try {
      const fetchedData = await fetchTreeData(defaultData.url);
      setData(data => ({
        ...data,
        loading: false,
        children: fetchedData
      }));
      setPathHistory([{
        name: 'master',
        children: fetchedData
      }]);
    } catch (errData) {
      setData({ error: true });
    }
  }, []);

  const onTreeToggleHandler = (treeData) => {
    setData(Object.assign({}, treeData));
  };

  const onFileSelectHandler = async (url) => {
    const fetchedData = await fetchFileData(url);
    setFileText(fetchedData);
  };

  const onFolderItemSelect = (node) => {
    if (node.url && node.type === 'blob') {
      onFileSelectHandler(node.url);
      setPathHistory(prev => [
        ...prev,
        { name: node.name, children: null }
      ]);
    } else if (node.children) {
      setPathHistory(prev => {
        if (node.name === '..') {
          return prev.slice(0, -1);
        }
        return [
          ...prev,
          { name: node.name, children: node.children }
        ];
      });
    }
  };

  const onPathItemClickHandler = (actionPath, i) => {
    setPathHistory(prev => {
      return prev.slice(0, i + 1)
    });
    setFileText('');
  };

  if (data.error) {
    return (
      <Redirect to={{
        pathname: "/error",
        owner,
        repo
      }} />
    );
  }

  const headerText = `${owner} / ${repo}`;
  const lastPath = (pathHistory && pathHistory.length && pathHistory[pathHistory.length - 1]) || null;
  const folderContentData = (lastPath && lastPath.children) || [];

  const parentPath = (pathHistory && pathHistory.length && pathHistory[pathHistory.length - 2]) || null;

  const browserContent =
    ( fileText && <FileView fileText={fileText} /> ) ||
    (
      folderContentData &&
      <FolderView
        data={folderContentData}
        parent={parentPath}
        onSelect={onFolderItemSelect}
      />
    ) ||
    null;

  return (
    <>
      <Header>
        <RepositoryTitle>
          <i className="fa fa-bookmark-o"></i>
          <span>{ headerText }</span>
        </RepositoryTitle>
        <RepositoryPath>
          <PathsView
            data={pathHistory}
            onPathItemClick={onPathItemClickHandler}
          />
        </RepositoryPath>
      </Header>
      <BrowserContainer>
        <TreeViewContainer>
          <TreeView
            data={data}
            onTreeToggle={onTreeToggleHandler}
            onFileSelect={onFileSelectHandler}
          />
        </TreeViewContainer>
        <FileViewContainer>
          { browserContent }
        </FileViewContainer>
      </BrowserContainer>
    </>
  );
};

export default Browser;

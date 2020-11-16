import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TreeView from './TreeView';
import FileView from './FileView';
import { fetchTreeData, fetchFileData } from '/src/components/Common/ApiServices';
import { Header, BrowserContainer, TreeViewContainer, FileViewContainer } from './styling';

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

  useEffect(async () => {
    try {
      const fetchedData = await fetchTreeData(defaultData.url);
      setData(data => ({
        ...data,
        loading: false,
        children: fetchedData
      }));
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

  return (
    <>
      <Header>
        <i className="fa fa-bookmark-o"></i>
        <span>{ headerText }</span>
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
          <FileView fileText={fileText} />
        </FileViewContainer>
      </BrowserContainer>
    </>
  );
};

export default Browser;

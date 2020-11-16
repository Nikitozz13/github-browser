import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import TreeView from './TreeView';
import FileView from './FileView';
import { fetchTreeData, fetchFileData } from '/src/components/Common/ApiServices';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: inherit;
`;

const TreeContainer = styled.div`
  flex: 0 0 30%;
  height: 100%;
  overflow: scroll;
`;

const ContentContainer = styled.div`
  flex: 1 0 70%;
  height: 100%;
  overflow: scroll;
  padding: 10px 10px 10px 30px;

  white-space: pre-wrap;

  &:before {
    counter-reset: listing;
  }

  & plaintext {
    counter-increment: listing;
    margin: 2px;
  }

  & plaintext::before {
    content: counter(listing) ". ";
    display: inline-block;
    color: #4d556a;
    width: 50px;
    margin-left: auto;
    margin-right: 25px;
    text-align: right;
    border-right: 1px solid #4d556a;
  }
`;

const BrowserContainer = ({ match, location }) => {
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

  return (
    <Container>
      <TreeContainer>
        <TreeView
          data={data}
          onTreeToggle={onTreeToggleHandler}
          onFileSelect={onFileSelectHandler}
        />
      </TreeContainer>
      <ContentContainer>
        <FileView fileText={fileText} />
      </ContentContainer>
    </Container>
  );
};

export default BrowserContainer;

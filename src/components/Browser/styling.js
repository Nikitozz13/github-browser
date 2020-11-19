import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: bold;
  background-color: #1f2128;
`;

export const RepositoryTitle = styled.div`
  flex: 0 0 30%;
  min-width: 250px;
  padding: 10px 15px;

  & > i {
    padding-right: 10px;
  }
`;

export const RepositoryPath = styled.div`
  flex: 1 0 auto;
  padding: 10px 15px;
`;

export const BrowserContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 50px);
`;

export const TreeViewContainer = styled.div`
  flex: 0 0 30%;
  height: 100%;
  min-width: 250px;
  overflow: scroll;
`;

export const FileViewContainer = styled.div`
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

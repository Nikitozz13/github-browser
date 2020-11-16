import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorPage = ({ location }) => {
  const { owner, repo } = location;

  if (!owner || !repo) {
    return (
      <Redirect to="/" />
    );
  }

  const button = <Link to="/tannerlinsley/react-query">/tannerlinsley/react-query</Link>
  return (
    <Container>
      <h3>Sorry, "{repo}" repository for owner "{owner}" was not found..</h3>
      <h4>Try that one: {button}</h4>
    </Container>
  );
};

export default ErrorPage;
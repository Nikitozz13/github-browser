import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IndexPage = () => {
  const button = <Link to="/tannerlinsley/react-query">click me</Link>
  return (
    <Container>
      <h3>Sorry, the page you are looking for could not be found..</h3>
      <h4>Here is a good place to start: {button}!</h4>
    </Container>
  );
};

export default IndexPage;

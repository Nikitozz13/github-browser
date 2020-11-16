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
  const button = <Link to="/tannerlinsley/react-query">here</Link>
  return (
    <Container>
      <h3>Hello, Friend!</h3>
      <h4>To start using the application, click {button}</h4>
    </Container>
  );
};

export default IndexPage;

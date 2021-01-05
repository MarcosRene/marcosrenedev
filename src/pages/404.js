import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import * as c from '../styles/constants';

import GlobalStyles from '../styles/global';
import SEO from '../components/seo';

const Container = styled.section`
  height: 100vh;
  width: 100%;

  background: ${c.colors.darkPrimary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;

  text-align: center;

  > h1 {
    margin-right: ${c.spaces.default};
    font-size: 15rem;
    font-weight: 1000;
    color: ${c.colors.darkPrimary};

    text-transform: uppercase;
    text-shadow: -1px -1px 0px ${c.colors.bluePrimary},
      1px 1px 0px ${c.colors.greenPrimary};
    letter-spacing: -20px;
  }

  > h3 {
    position: absolute;
    left: 0;
    right: 0;
    top: 60%;
    font-size: 42px;
    font-weight: 700;
    color: ${c.colors.whitePrimary};
    text-transform: uppercase;
    text-shadow: 0px 2px 0px ${c.colors.bluePrimary};
    letter-spacing: 13px;
  }
`;

const Button = styled(Link)`
  display: block;
  padding: ${c.spaces.xs} ${c.spaces.sm};

  font-size: ${c.fontSize.xs};
  font-weight: 700;
  text-transform: uppercase;
  color: ${c.colors.bluePrimary};

  outline: 1px solid ${c.colors.bluePrimary};
  outline-offset: 0;

  transition: all 0.5s ease;

  &:hover {
    outline: 1px solid transparent;
    outline-offset: 5px;
  }
`;

const NotFoundPage = () => (
  <Container>
    <GlobalStyles />
    <SEO title="404: Not found" />
    <Content>
      <h1>404</h1>
      <h3>Page not found</h3>
    </Content>
    <Button to="/page">Voltar para a home</Button>
  </Container>
);

export default NotFoundPage;

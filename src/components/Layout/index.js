import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import GlobalStyles from '../../styles/global';
import ScrollIndicator from '../ScrollIndicator';
import Profile from '../Profile';
import Footer from '../Footer';
import * as S from './styled';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Helmet>
        <script
          src="https://provai-s3.proluno.com.br/provai/public%2Fscripts%2Fwidget.min.js"
          data-widget-id="wid_6440654b-82d9-446e-8e28-9f281f5eadde"
          data-widget-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6Im9yZ19mN2U3NDRmZS02MTA1LTRlNjItYTMyZi00NGIwMzZjMGZiZmUiLCJ3aWRnZXRJZCI6IndpZF82NDQwNjU0Yi04MmQ5LTQ0NmUtOGUyOC05ZjI4MWY1ZWFkZGUiLCJpYXQiOjE3NTI4NzE2NDQsInN1YiI6Im9yZ19mN2U3NDRmZS02MTA1LTRlNjItYTMyZi00NGIwMzZjMGZiZmUifQ.oKZjNn9-K6ePfejYh9Uv5gRwCCgvZgqeQdSbP1-ZlUI"
          defer
        ></script>
      </Helmet>
      <ScrollIndicator />
      <GlobalStyles />
      <S.Main>
        <aside>
          <Profile />
        </aside>
        {children}
      </S.Main>
      <Footer />
    </S.WrapperLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../../styles/global';
import ScrollIndicator from '../ScrollIndicator';
import Profile from '../Profile';
import Footer from '../Footer';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
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

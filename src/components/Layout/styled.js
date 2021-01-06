import styled from 'styled-components';
import * as c from '../../styles/constants';

export const WrapperLayout = styled.div`
  height: 100vh;
  background: ${c.colors.bg};

  position: relative;
`;

export const Main = styled.main`
  width: 55%;
  margin: 0 auto;
  padding: 0 ${c.spaces.sm};

  display: flex;
  flex-direction: column;

  min-height: 100vh;

  aside {
    display: flex;
  }

  .arrowBack {
    margin-left: 1.8rem;
    display: flex;
    align-items: center;
    color: ${c.colors.whitePrimary};

    transition: color ${c.transitions.default};
    &:hover {
      color: ${c.colors.blueTerciary};
    }

    &::before {
      content: '\\2190';
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0;

    .arrowBack {
      margin-left: ${c.spaces.xs};
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    padding: 0;
  }

  @media (min-width: 992px) and (max-width: 1400px) {
    width: 80%;
  }
`;

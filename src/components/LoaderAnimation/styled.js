import styled, { keyframes } from 'styled-components';
import * as c from '../../styles/constants';

const fillSvg = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: ${c.colors.darkPrimary};
  }
`;

const fadeOut = keyframes`
  from {
    display: flex;
    opacity: 1;
    z-index:1000;
  }
  to {
    display: none;
    opacity: 0;
    z-index: -1000;
  }
`;

export const AnimationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${c.colors.darkPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  animation: ${fadeOut} 1s ease forwards 3s;

  svg {
    width: 60rem;
    height: 26rem;

    path {
      animation: ${fillSvg} 1s ease forwards 2s;
    }
  }
`;

import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import * as c from '../../styles/constants';

export const PostItemWrapper = styled.section`
  display: flex;

  margin-bottom: ${c.spaces.sm};
`;

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

export const PostItemContent = styled.div`
  --border-width: 0.188rem;

  width: 100%;
  height: auto;

  margin: 0 ${c.spaces.xlg} ${c.spaces.sm};
  padding: ${c.spaces.sm};

  background: ${c.colors.darkPrimary};

  border-radius: var(--border-width);

  line-height: ${c.spaces.sm};

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;


    &::after {
      position: absolute;
      content: '';
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      z-index: -1;
      background: linear-gradient(
        60deg,
        ${c.colors.bluePrimary},
        ${c.colors.blueSecundary},
        ${c.colors.blueTerciary},
        ${c.colors.greenPrimary},
        ${c.colors.greenSecondary},
        ${c.colors.greenTerciary}
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: ${moveGradient} 5s alternate infinite;
    }
  
  
  > span {
    font-size: ${c.fontSize.xs};
    color: ${c.colors.whitePrimary};
  }

  @media (min-width: 320px) and (max-width: 768px) {
    padding: ${c.spaces.xs};
    margin: 0 ${c.spaces.ssm} ${c.spaces.default};
  }
`;

export const PostItemInfo = styled.div`
  margin-bottom: ${c.spaces.xxs};

  font-weight: 500;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-bottom: ${c.spaces.xs};
  }
`;

export const PostItemDate = styled.time`
  margin-right: ${c.spaces.xs};
  text-transform: uppercase;
  font-size: 0.875rem;
  color: ${c.colors.whitePrimary};
`;

export const PostItemTitle = styled.h2`
  margin-bottom: ${c.spaces.xs};
  font-size: ${c.fontSize.md};
  font-weight: 600;

  display: block;
`;

export const PostItemTextTitle = styled(Link)`
  color: ${c.colors.whitePrimary};
  text-decoration: none;

  transition: color ${c.transitions.default};

  &:hover {
    color: ${c.colors.blueSecundary};
    text-decoration: underline;
  }
`;

export const PostItemDescription = styled.p`
  margin: ${c.spaces.ssm} 0;
  color: ${c.colors.whitePrimary};
  line-height: ${c.spaces.sm};
`;

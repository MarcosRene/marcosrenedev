import styled from 'styled-components';
import * as c from '../../styles/constants';

export const SocialLinksWrapper = styled.nav`
  margin: ${c.spaces.sm} auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLinksList = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;

  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  text-decoration: none;
  color: ${c.colors.whitePrimary};

  display: block;
  margin: 0 ${c.spaces.sm};
`;

export const IconWrapper = styled.div`
  > svg {
    fill: ${c.colors.whitePrimary};
    height: ${c.spaces.sm};
    width: ${c.spaces.sm};

    transition: fill ${c.transitions.default};
    
    &:hover {
      fill: ${c.colors.blueSecundary};
    }
  }
`;

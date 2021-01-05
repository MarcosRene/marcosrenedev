import styled from 'styled-components';
import * as c from '../../styles/constants';

export const FooterWrapper = styled.footer`
  height: ${c.height.default};
  background: ${c.colors.darkSecondary};

  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const FooterContent = styled.div`
  margin: ${c.spaces.md} auto;
  padding: 0 ${c.spaces.sm};

  font-size: ${c.fontSize.sm};
  color: ${c.colors.whitePrimary};
`;
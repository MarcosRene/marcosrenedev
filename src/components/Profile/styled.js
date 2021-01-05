import styled from 'styled-components';
import * as c from '../../styles/constants';

export const Container = styled.div`
  width: 100%;
  margin: ${c.spaces.md} 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: ${c.spaces.sm};

  color: ${c.colors.whitePrimary};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h3`
  margin: ${c.spaces.xxs} 0;
  font-size: ${c.fontSize.default};
`;

export const Bio = styled.p`
  font-size: ${c.fontSize.sm};
  line-height: ${c.spaces.sm};
`;


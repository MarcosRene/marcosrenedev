import styled from 'styled-components';
import * as c from '../../styles/constants';

export const WrapperHeader = styled.header`
  height: ${c.height.default};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeader = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 ${c.spaces.sm};

  display: flex;
  justify-content: center; 
`;
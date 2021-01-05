import styled from 'styled-components';
import * as c from '../../styles/constants';

export const TagWrapper = styled.div`
  position: relative;
  padding: 0 ${c.spaces.xxs};    
  height: 1.625rem;
  line-height: 1.625rem;
  background: linear-gradient(60deg, ${c.colors.blueSecundary}, ${c.colors.greenSecondary});
  border: none;
  border-radius: 0.25rem;

  display: inline-block;
`;

export const TagTitle = styled.span`
  color: ${c.colors.whitePrimary};
  text-transform: uppercase;
  font-size: ${c.fontSize.xs};
  letter-spacing: 0.125rem;
`;

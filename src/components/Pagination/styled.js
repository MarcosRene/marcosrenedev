import styled from 'styled-components';
import * as c from '../../styles/constants';

export const PaginationWrapper = styled.div`
  margin: ${c.spaces.md} ${c.spaces.xlg} ${c.spaces.sm};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${c.colors.whiteSecondary};
  }

  a {
    color: ${c.colors.whitePrimary};
    text-decoration: none;

    transition: color ${c.transitions.default};

    &:hover {
      color: ${c.colors.blueTerciary};
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    margin: ${c.spaces.md} ${c.spaces.xxs} ${c.spaces.sm};
  }
`;

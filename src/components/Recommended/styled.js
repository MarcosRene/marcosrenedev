import styled from 'styled-components';
import { Link } from 'gatsby';

import * as c from '../../styles/constants';

export const RecommendedWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const RecommendedLink = styled(Link)`
  width: 50%;
  border: 0.063rem solid ${c.colors.whitePrimary};
  border-radius: 0.188rem;
  color: ${c.colors.whitePrimary};
  padding: ${c.spaces.sm};
  text-decoration: none;

  display: flex;
  align-items: center;

  transition: background, color, border, ${c.transitions.default};

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: ${c.colors.blueTerciary};
    border: 0.063rem solid ${c.colors.blueTerciary};
  }

  &.previous,
  &.next {
    margin: 0 0.5rem;
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
  }

  &.next:after {
    content: '\\2192';
  }
`;

import styled from 'styled-components';
import { Link } from 'gatsby';

import * as c from '../../styles/constants';

export const RecommendedWrapper = styled.div`
  border-radius: 0.2rem;
  display: flex;

  margin-bottom: 3.125rem;
`;

export const RecommendedLink = styled(Link)`
  align-items: center;
  border: 0.063rem solid ${c.colors.whitePrimary};
  border-radius: 0.188rem;
  color: ${c.colors.whitePrimary};
  display: flex;
  padding: ${c.spaces.lg};
  text-decoration: none;
  width: 50%;

  transition: background, color, border, ${c.transitions.default};

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: ${c.colors.blueTerciary};
    border: 0.063rem solid ${c.colors.blueTerciary};
  }

  &.previous {
    margin-right: 0.313rem;
  }

  &.next {
    margin-left: 0.313rem;
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;

import styled from 'styled-components';

import * as c from '../../styles/constants';

export const Indicator = styled.div`
  height: ${c.spaces.xxs};
  width: 0%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    60deg,
    hsl(224, 85%, 66%),
    hsl(269, 85%, 66%),
    hsl(314, 85%, 66%),
    hsl(359, 85%, 66%),
    hsl(44, 85%, 66%),
    hsl(89, 85%, 66%),
    hsl(134, 85%, 66%),
    hsl(179, 85%, 66%)
  );

  z-index: ${c.zindex.default};
`;

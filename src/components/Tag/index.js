import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Tag = ({ tagName }) => {
  return (
    <S.TagWrapper>
      <S.TagTitle>
        {tagName}
      </S.TagTitle>
    </S.TagWrapper>
  );
}

Tag.propTypes = {
  Tag: PropTypes.string.isRequired,
};

export default Tag;


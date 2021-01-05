import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import * as S from './styled';

const PostItem = ({ slug, tag, date, timeToRead, title, description }) => {
  return (
    <S.PostItemWrapper
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <S.PostItemContent>
        <S.PostItemInfo>
          <S.PostItemDate>{date}</S.PostItemDate>
          <Tag tagName={tag} />
        </S.PostItemInfo>
        <S.PostItemTitle>
          <S.PostItemTextTitle to={slug}>{title}</S.PostItemTextTitle>
        </S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <span>• {timeToRead} min de leitura</span>
      </S.PostItemContent>
    </S.PostItemWrapper>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;

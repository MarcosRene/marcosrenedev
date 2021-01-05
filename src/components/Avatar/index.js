import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <S.Hero>
      <S.AvatarWrapper
        fluid={avatarImage.childImageSharp.fluid}
        className="foo"
        style={{ width: '120px' }}
      />
    </S.Hero>
  );
}

export default Avatar;

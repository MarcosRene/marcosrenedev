import React from 'react';

import Avatar from '../Avatar';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Profile = () => {
  return (
    <S.Container>
      <Avatar />
      <S.Content>
        <S.Name>Marcos Renê</S.Name>
        <S.Bio>Desenvolvedor Frontend</S.Bio>
        <SocialLinks />
      </S.Content>
    </S.Container>
  );
}

export default Profile;
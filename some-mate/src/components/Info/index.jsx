// Info.js
import React from 'react';
import * as S from './Info.styled';

const Info = ({ text }) => {
  return (
    <S.InfoContainer>
      {text}
    </S.InfoContainer>
  );
};

export default Info;

// import React from 'react'
import * as S from './Button.styled';

export default function Button({text, width}) {

  return <S.Button width={width}>{text}</S.Button>;
}

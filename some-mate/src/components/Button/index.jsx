// import React from 'react'
// Button.js
import * as S from './Button.styled';

export default function Button({ text, width, onClick }) {
  return <S.Button width={width} onClick={onClick}>{text}</S.Button>;
}

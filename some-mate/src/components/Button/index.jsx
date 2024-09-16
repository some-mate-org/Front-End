// import React from 'react'
import * as S from './Button.styled';

export default function Button({ text, width, theme, onClickFunc }) {
  return (
    <>
      {theme === 'gray' && (
        <S.GrayButton width={width} onClick={onClickFunc}>
          {text}
        </S.GrayButton>
      )}
      {theme === 'blue' && (
        <S.BlueButton width={width} theme={theme} onClick={onClickFunc}>
          {text}
        </S.BlueButton>
      )}
      {theme === 'white' && (
        <S.BlueButton width={width} theme={theme} onClick={onClickFunc}>
          {text}
        </S.BlueButton>
      )}
    </>
  );
}

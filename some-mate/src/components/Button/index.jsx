// Button.js
import * as S from './Button.styled';

export default function Button({ text, width, theme, onClick }) {
  return (
    <>
      {theme === 'gray' && (
        <S.GrayButton width={width} onClick={onClick}>
          {text}
        </S.GrayButton>
      )}
      {theme === 'blue' && (
        <S.BlueButton width={width} theme={theme} onClick={onClick}>
          {text}
        </S.BlueButton>
      )}
      {theme === 'white' && (
        <S.BlueButton width={width} theme={theme} onClick={onClick}>
          {text}
        </S.BlueButton>
      )}
    </>
  );
}

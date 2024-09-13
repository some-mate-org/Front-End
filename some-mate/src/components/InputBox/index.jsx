import * as S from './InputBox.styled';

const InputBox = ({ placeholder }) => {
  return (
    <S.InputContainer>
      <S.Input placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default InputBox;

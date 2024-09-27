// InputBox.js
import * as S from './InputBox.styled';

const InputBox = ({ type, placeholder, value, onChange, onKeyDown }) => {
  return (
    <S.InputContainer>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}  // onChange 이벤트 핸들러 추가
        onKeyDown={onKeyDown}
      />
    </S.InputContainer>
  );
};

export default InputBox;

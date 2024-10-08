import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 270px;
  height: 50px;
  background-color: #D7ECFF;
  margin: 25px 35px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #737373;
  font-size: 13px;
  font-weight: 200;
  padding: 0 16px; 
  border-radius: 10px;
  
  
  &:focus {
    outline: none; /* 기본 포커스 스타일 제거 */
    background-color: #bbdfff;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.6); /* 포커스 시 외곽선 효과 */
  }
`;


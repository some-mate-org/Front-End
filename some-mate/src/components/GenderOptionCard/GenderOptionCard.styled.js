import styled from 'styled-components';

export const OptionCardContainer = styled.button`
  width: 155px;
  height: 202px;
  background-color: #D7ECFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none; /* 기본 버튼 테두리 제거 */
  cursor: pointer; /* 클릭 가능성을 나타내는 포인터 커서 */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #BBDFFF; /* 호버 시 배경색 변경 */
  }

  &:focus {
    outline: none; /* 기본 포커스 스타일 제거 */
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5); /* 포커스 시 외곽선 효과 */
  }
`;

export const OptionImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
`;

export const OptionText = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: bold;
`;

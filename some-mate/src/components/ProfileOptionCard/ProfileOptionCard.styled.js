import styled from 'styled-components';

export const OptionCardContainer = styled.button`
  width: 140px; /* 가로 크기 조정 */
  height: 140px; /* 세로 크기 조정 */
  background-color: #D7ECFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 15px; /* 카드 간격 추가 */

  &:hover {
    background-color: #BBDFFF;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
  }
`;

export const OptionImage = styled.img`
  /* width: 80px;  이미지를 더 크게 조정 */
  /* height: 80px; 이미지 크기를 가로와 세로 동일하게 맞춤 */
  /* margin-bottom: 10px; 이미지와 텍스트 간의 간격 조정 */
  object-fit: cover; /* 이미지 비율을 유지하면서 박스에 맞추기 */
  border-radius: 50%; /* 이미지가 원형으로 표시되도록 설정 */
`;

export const OptionText = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: bold;
  text-align: center; /* 텍스트 가운데 정렬 */
`;

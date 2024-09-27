import styled from 'styled-components';

export const Container = styled.div`

 margin-left: 27px; 
`;
export const InfoText = styled.div`
  font-size: 15px;
  color: #737373; 
  margin-top: 2px; 
 
`;

 export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #6B6969; 
  margin-top: 40px; 
  text-align: center;

`;

export const QuestionText = styled.div`
  font-size: 16px;
  font-weight: semi-blod;
  color: #000000; 
  margin-top: 100px; 
  text-align: center;

`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 20px;    
  gap: 20px;    
  margin-right: 25px;
  
 
`;

export const Container2 = styled.div`
  max-width: 100%;
  /* height: 50%; */
  /* height: fit-content; */
  display: flex;
  position: relative;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex; /* Flexbox 레이아웃을 사용하여 자식 요소들을 정렬 */
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배치 */
  justify-content: center; /* 자식 요소들을 수직 방향으로 가운데 정렬 */
  align-items: center; /* 자식 요소들을 수평 방향으로 왼쪽 정렬 */
  padding: 0 1rem; /* 상하 패딩은 없고, 좌우로 1rem 패딩을 추가 */
  border: solid 3px rgba(217, 217, 217, 0.45); /* 45% 불투명도의 회색 테두리 (3px 굵기) */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25); /* 그림자 추가: 아래쪽에 흐린 그림자를 4px 정도 적용 */
  /* margin-top: 5rem; */ /* 주석 처리된 속성: margin-top을 5rem으로 설정하려는 코드 */
  width: auto; /* 가로 크기를 자동으로 설정 (내용에 맞춰 크기가 변함) */
  height: auto; /* 세로 크기를 자동으로 설정 (내용에 맞춰 크기가 변함) */
  word-break: break-all; /* 너무 긴 단어가 있을 경우 줄을 바꾸어 강제로 단어를 나눔 */
  background-color: #D9D9D9; /* 배경 색상을 #D9D9D9 (밝은 회색)로 설정 */
  margin: 0 0.8rem; /* 상하는 margin이 없고 좌우로는 0.8rem의 여백을 추가 */
  padding: 1rem; /* 모든 방향에 1rem의 패딩을 추가 */
  border-radius: 10px; /* 테두리의 모서리를 10px만큼 둥글게 만듦 */
  margin-top: 4rem; /* 상단에 4rem의 여백을 추가 */
  overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
  opacity: 80%; /* 불투명도를 100%로 설정 (투명하지 않음) */
`;


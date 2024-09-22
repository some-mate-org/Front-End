import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;  // 컨테이너의 너비 조정
  max-width: 500px;  // 최대 너비 설정
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;  // 타이틀을 중앙 정렬
  color: #6b6969;
  font-size: 20px;
  margin-bottom: 20px;
  
  span {
    color: #F76767;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // 버튼을 중앙 정렬
  text-align: center;
  margin-top: 250px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;  // 이미지와 입력 상자를 중앙 정렬
  margin: 20px 0;
`;

export const KakaoButton = styled.button`
  margin: 20px auto;  // 버튼을 중앙에 위치시키고 상하 여백 추가
  width: 60px;   
  height: 60px;
  background-color: #ffeb00;
  border: none;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #fdd835;
  }

  &:active {
    background-color: #ffeb00;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const NormalButton = styled.button`
  width: 100%;  // 버튼의 너비를 컨테이너 너비에 맞춤
  padding: 10px 0;  // 패딩으로 버튼 높이 조정
  margin-top: 10px;  // 상단 여백 추가
  background-color: #ffeb00;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0c300;
  }
`;

export const KakaoIconContainer = styled.div`
  margin-right: 10px;  // 입력 상자와 이미지 사이의 여백 추가
  display: flex;
  align-items: center;  // 이미지를 세로 중앙 정렬
  margin: 28px auto;  // 버튼을 중앙에 위치시키고 상하 여백 추가
  width: 50px;   
  height: 50px;
  background-color: #ffeb00;
  border: none;
  border-radius: 20%; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 52px;
    height: 52px;
  }
`;
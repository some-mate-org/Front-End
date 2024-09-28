import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding : 0;
`;
export const DescriptionText = styled.p`
  font-size: 15px;
  color: #737373;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  span {
    color: #2287fe;
  }
`;
export const GenderCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 2rem;
  margin-right: auto;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 2rem;
  margin-right: auto;
`;

export const QuestionIcon = styled.img`
  margin-left: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: #6b6969;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 59px;
  margin-right: auto;
  margin-left: 2rem;

  span {
    color: #f76767;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: auto;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center; // 이미지와 입력 상자를 중앙 정렬
  width: 100%;
  margin: 20px 0;
`;

export const KakaoButton = styled.button`
  margin: 20px auto; // 버튼을 중앙에 위치시키고 상하 여백 추가
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

  /* &:hover {
    background-color: #fdd835;
  } */

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
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
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
  /* margin-right: 5px; */
  display: flex;
  align-items: center;
  margin: 28px auto;
  width: 50px;
  height: 50px;
  padding: 0;
  margin-left: 3rem;
  margin-right: auto;
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
    margin: 0;
    padding: 0;
  }
`;
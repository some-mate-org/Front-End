import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 37px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: #6b6969;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 30px;

  span {
    color: #F76767;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 37px;
`;

export const TitleLogo = styled.div`
  margin-top: 6.2rem;
  margin-bottom: 0.7rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  transform: translateX(-10px);
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const KakaoButton = styled.button`
  margin-left: -20px;
  width: 40px;   
  height: 40px;
  background-color: #ffeb00;
  border: none;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #fdd835;
  }

  &:active {
    background-color: #ffeb00;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;





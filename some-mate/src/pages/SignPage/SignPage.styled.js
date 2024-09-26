import styled from 'styled-components';

export const Container = styled.div`
  /* margin-left: 27px;
  margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionWrapper = styled.div`
  margin-right: auto;
  margin-left: 2rem;
`;

export const Title = styled.h2`
  color: #6b6969;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 59px;

  span {
    color: #f76767;
  }
`;

export const GenderOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 86px;
  /* margin-right: 26px; */
  gap: 34px;
`;

export const ButtonContainer = styled.div`
  margin-top: 137px;
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

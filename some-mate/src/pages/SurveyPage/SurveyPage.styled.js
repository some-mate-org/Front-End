// src/pages/SurveyPage/SurveyPage.styled.js
import styled from 'styled-components';

export const PageWrapper = styled.div`
  /* margin-left: 27px;
  margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div`
  /* font-size: 1.5rem; */
  font-weight: bold;
  color: #6b6969;
  margin: 20px 0;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;
  /* margin-top: 100px; */
  /* margin-right: 35vh; */
`;

export const QuestionText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1.2rem;
`;

export const Emoji = styled.div`
  text-align: center;
  font-size: 60px;
`;
export const CustomGenderCardWrapper = styled.div`
  /* width: 300px; */
  height: 100px;
  display: flex;
  margin-right: auto;
  margin-left: 1.2rem;
`;
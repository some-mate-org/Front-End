import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 20px; */
`;

export const InfoText = styled.div`
  font-size: 15px;
  color: #737373;
  margin-top: 2px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #6b6969;
  margin-top: 40px;
  margin-right: 7.5rem;
`;

export const QuestionText = styled.div`
  font-size: 16px;
  font-weight: semi-bold;
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
  /* margin-right: 25px; */
`;

export const Wrapper = styled.div`
  background-color: rgba(217, 217, 217, 0.17);
  /* margin-left: 20px; */
  border-radius: 10px;
  width: 320px;
  margin-top: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* margin-right: 500px; */
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

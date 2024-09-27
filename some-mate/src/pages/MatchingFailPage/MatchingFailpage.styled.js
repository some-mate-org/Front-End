import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RobotWrapper = styled.div`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem; 
`;

export const RoundImage = styled.div`
  border-radius: 50%;
  background-color: #FBEDA3; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem; 
  height: 9rem;
  z-index: 10; 
`;

export const InfoBox = styled.div`
  position: absolute; 
  top: 40%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  padding: 1rem;
  border: solid 3px #fae000; 
  background-color: #fffdf2; 
  border-radius: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 190px;
 
`;

export const InfoText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #737373;
  margin-top: 2rem
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 1rem;
  padding: 1.5rem;
  margin-top: 12rem;
  border-top: solid 2px #e4e1e1;
`;

export const QuestionText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #737373;
`;

export const SmallText = styled.div`
  font-size: 0.8rem;
  color: #737373;
`;
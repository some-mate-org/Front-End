import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 336px;
  height: 19px;
  border-radius: 15px;
  background-color: #d7ecff;
  margin-right: 10px;
  position: relative;
  margin-top: 31px;
`;

export const ProgressFill = styled.div`
  height: 19px;
  border-radius: 15px;
  background-color: #98a0a6;
  transition: width 0.3s ease; 
`;

export const ProgressText = styled.p`
  margin: 19px 0 0;
  font-size: 12px;
  color: #737373;
`;

export const GenderText = styled.p`
  margin-top: 59px;
  font-size: 20px;
  color: #737373;
  font-weight: bold;
`;

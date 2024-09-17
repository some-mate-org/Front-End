import styled from 'styled-components';

export const CardContainer = styled.div`
  
  border: 1px solid #A3D1FB;
  padding: 25px;
  border-radius: 8px;
  cursor: pointer;
  width: 300px;
  height: 60px;
  text-align: center;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const OptionText = styled.p`
  font-size: 16px;
  color: #333;
`;

export const ProgressBarContainer = styled.div`
  width: 336px;
  height: 19px;
  border-radius: 15px;
  background-color: #d7ecff;
  margin-right: 10px;
  position: relative;
  margin-top: 31px;
`;

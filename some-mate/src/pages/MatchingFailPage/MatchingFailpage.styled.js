import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  z-index: 10;
  background-color: #fbeda3;
  text-align: center;
  position: absolute;
  top: -4rem;
`;

export const InfoBox = styled.div`
  position: relative;
  border: solid 3px #fae000;
  background-color: #fffdf2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  margin: 0 0.8rem;
  padding: 6.3rem;
  border-radius: 10%;
  margin-top: 4rem;
  /* overflow: hidden; */
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 0.8rem;
  padding: 1rem;
  margin-top: 1.3rem;
  border-top: solid 2px #e4e1e1;
`;

export const QuestionText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #737373;
`;

export const SmallText = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
  color: #737373;
`;

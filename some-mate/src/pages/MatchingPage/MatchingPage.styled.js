import styled from 'styled-components';

export const TitleLogo = styled.div`
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: black;
  padding: 1rem;
  margin-top: 1.3rem;
  border-top: solid 2px #e4e1e1;
`;

export const Text = styled.div`
  ${({ size }) => `font-size: ${size}rem;`}
  font-weight: bold;
  color: #737373;
`;

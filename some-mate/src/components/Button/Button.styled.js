import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 20px;
  ${({ width }) => `width: ${width}px;`}
  height : 50px;
  padding: 1rem;
  border: none;
  background-color: #737373;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
`;

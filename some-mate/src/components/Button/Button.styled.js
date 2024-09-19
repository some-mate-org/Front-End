import styled from 'styled-components';

export const GrayButton = styled.button`
  border-radius: 20px;
  ${({ width }) => `width: ${width}px;`}

  height : 50px;
  padding: 1rem;
  border: 2px solid #737373;
  background-color: #737373;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
`;

export const BlueButton = styled(GrayButton)`
  background-color: #8bc4ef;
  color: white;
  border: 2px solid #8bc4ef;
  ${({ theme }) =>
    theme === 'white' &&
    `
    background-color: white;
    color: #8bc4ef;
  `}
`;

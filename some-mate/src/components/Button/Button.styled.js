import styled from 'styled-components';

export const GrayButton = styled.button`
  border-radius: 20px;
  ${({ width }) => `width: ${width}px;`}

  height : 50px;
  padding: 1rem;
  border: 2px solid #737373;
  background-color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #737373;
  margin-top: 1rem;
  cursor: pointer;
`;

export const BlueButton = styled(GrayButton)`
  background-color: #8bc4ef;
  color: white;
  border: 2px solid #8bc4ef;
  text-align: center;
  ${({ theme }) =>
    theme === 'white' &&
    `
    background-color: white;
    color: #8bc4ef;
  `}
`;

export const BrownButton = styled(GrayButton)`
  background-color: #3B1B1B;
  color: white;
  border: 2px solid #3B1B1B;
  text-align: center;
  ${({ theme }) =>
    theme === 'white' &&
    `
    background-color: white;
    color: #8bc4ef;
  `}
`;

export const PrimaryButton = styled(GrayButton)`
  background-color: #737373;
  color: white;
  border: 2px solid #737373;
  text-align: center;
  ${({ theme }) =>
    theme === 'white' &&
    `
    background-color: white;
    color: #white;
  `}
`;

import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 270px;
  height: 50px;
  background-color: #D7ECFF;
  margin: 30px 35px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #737373;
  font-size: 13px;
  font-weight: 200;
  padding: 0 16px; 
  border-radius: 10px;
  
  
  &:focus {
    outline: none; 
  }
`;


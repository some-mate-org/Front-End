import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 325px;
  height: 207px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;


export const ModalText = styled.p`
  margin-top: 5px 0;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: auto;
`;

export const DelayButton = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 16px;
  font-weight: bold;
  background-color: #d7ecff;
  border: none;
  color: #2287fe;
  font-size: 16px;
  margin-bottom: 5px; 
  align-self: center;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-weight: bold;
  border: none;
  color: #333;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 20px;
  background-color: #2287fe;
  font-weight: bold;
  border: none;
  color: white;
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
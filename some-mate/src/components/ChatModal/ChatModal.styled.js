import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 15px;  
  border-radius: 15px; 
  height: auto;
  text-align: center;
  position: relative;

  h2 {
    font-size: 20px;
    color: #333; 
    margin-bottom: 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  font-weight: bold;
  color: #888;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #333; 
  }
`;

export const StepNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;  
  margin-bottom: 3px;
`;

export const StepText = styled.p`
  font-size: 18px;
  color: #444;  
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;  
    height: auto;
   
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: #333;
    transform: scale(1.2); 
  }
`;


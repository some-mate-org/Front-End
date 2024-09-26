import { useState } from 'react';
import { ModalContainer, ModalContent, CloseButton, CarouselContainer, ArrowButton, StepText, StepNumber } from './ChatModal.styled';
import step1 from '../../assets/img/step1.svg';
import step2 from '../../assets/img/step2.svg';
import step3 from '../../assets/img/step3.svg';

const steps = [
  { img: step1, text: '오픈 채팅방을 만들어주세요!' },
  { img: step2, text: '1:1 채팅방을 선택하세요!' },
  { img: step3, text: 'URL을 복사하세요!' }
];

const ChatModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
  <ModalContainer>
    <ModalContent>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>오픈채팅 URL 작성 안내</h2>
      <CarouselContainer>
        <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
        <div>
          <img src={steps[currentStep].img} alt={`Step ${currentStep + 1}`} />
          <StepNumber>Step {currentStep + 1}</StepNumber>  
          <StepText>{steps[currentStep].text}</StepText> 
        </div>
        <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
      </CarouselContainer>
    </ModalContent>
  </ModalContainer>
);

};

export default ChatModal;

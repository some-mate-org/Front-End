import { useState } from 'react';
import Modal from '../../components/Modal';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import GenderOptionCard from '../../components/GenderOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import MaleIcon from '../../assets/maleIcon.svg';
import FemaleIcon from '../../assets/femaleIcon.svg';
import {
  Container,
  Title,
  GenderOptionsContainer,
  ButtonContainer,
} from './SignPage.styled'; // ButtonContainer 추가
import PersonalInfoPage from '../PersonalInfoPage';
import Button from '../../components/Button';

export default function SignPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setIsModalOpen(false);
    setIsFirst(false);
  };

  return (
    <Container>
      {isFirst ? (
        <div>
          <ProgressBar progress={33} timeLeft="가입까지 30초 남았어요!" />
          <Title>성별을 알려주세요</Title>
          <GenderCard imageSrc={QuCharactor} title="성별이 뭐야?" />
          <GenderOptionsContainer>
            <GenderOptionCard imageSrc={MaleIcon} title="남자예요" />
            <GenderOptionCard imageSrc={FemaleIcon} title="여자예요" />
          </GenderOptionsContainer>
          <ButtonContainer>
            <Button
              text="다음으로"
              width={314}
              theme="gray"
              onClickFunc={handleNext}
            />
          </ButtonContainer>
        </div>
      ) : (
        <PersonalInfoPage />
      )}
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </Container>
  );
}

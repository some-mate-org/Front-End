/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Modal from '../../components/Modal';
// import SomateLogo from '../../assets/logo/SomeMateLogo.svg?react';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import GenderOptionCard from '../../components/GenderOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import MaleIcon from '../../assets/maleIcon.svg';
import FemaleIcon from '../../assets/femaleIcon.svg';
import Button from '../../components/Button';
import { useUser } from '../../Context/userContext.jsx';
import {
  Container,
  Title,
  GenderOptionsContainer,
  ButtonContainer,
} from './SignPage.styled';
import { useNavigate } from 'react-router-dom';

function SignPage() {
  const [gender, setGender] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { userData, updateUser } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    console.log('selectedGender:', gender);
    if (gender === null) {
      alert('성별을 선택해주세요.');
      return;
    }
    updateUser({ gender });
    navigate('/sign2');
  };

  return (
    <Container>
      <ProgressBar progress={33} timeLeft="가입까지 30초 남았어요!" />
      <Title>성별을 알려주세요</Title>
      <GenderCard imageSrc={QuCharactor} title="너의 성별은 뭐야?" />
      <GenderOptionsContainer>
        <GenderOptionCard
          imageSrc={MaleIcon}
          title="남자에요"
          isSelected={gender === 0}
          onClick={() => setGender(0)}
        />
        <GenderOptionCard
          imageSrc={FemaleIcon}
          title="여자에요"
          isSelected={gender === 1}
          onClick={() => setGender(1)}
        />
      </GenderOptionsContainer>
      <ButtonContainer>
        <Button width={320} theme="gray" onClick={handleNext} text="다음으로" />
      </ButtonContainer>
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </Container>
  );
}

export default SignPage;

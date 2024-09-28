/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Modal from '../../components/Modal';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import GenderOptionCard from '../../components/GenderOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg?react';
import MaleIcon from '../../assets/maleIcon.svg?react';
import FemaleIcon from '../../assets/femaleIcon.svg?react';
import Button from '../../components/Button';
import { useUser } from '../../Context/userContext.jsx';
import Typical from 'react-typical'; // 타이핑 효과를 위한 라이브러리
import {
  Container,
  Title,
  GenderOptionsContainer,
  ButtonContainer,
  QuestionWrapper,
} from './SignPage.styled';
import { useNavigate } from 'react-router-dom';

function SignPage() {
  const [gender, setGender] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { userData, updateUser } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate('/');
  };

  const handleModalNext = () => {
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
      <ProgressBar progress={25} timeLeft="가입까지 30초 남았어요!" />
      <QuestionWrapper>
        <Title>성별을 알려주세요</Title>
        {/* <GenderCard imageSrc={QuCharactor} title="너의 성별은 뭐야?" /> */}
        <GenderCard
          Image={QuCharactor}
          title={
            <Typical
              steps={['너의 성별은 뭐야?', 1000]} // 타이핑 효과 적용
              loop={1}
              wrapper="span"
            />
          }
        />
      </QuestionWrapper>
      <GenderOptionsContainer>
        <GenderOptionCard
          Image={MaleIcon}
          title="남자에요"
          isSelected={gender === 0}
          onClick={() => setGender(0)}
        />
        <GenderOptionCard
          Image={FemaleIcon}
          title="여자에요"
          isSelected={gender === 1}
          onClick={() => setGender(1)}
        />
      </GenderOptionsContainer>
      <ButtonContainer>
        <Button
          width={320}
          theme={gender !== null ? 'primary' : 'gray'}
          onClick={handleNext}
          text="다음으로"
        />
      </ButtonContainer>
      {isModalOpen && (
        <Modal
          confirmFunc={handleModalNext}
          cancelFunc={handleModalClose}
          title="개인정보 수집 및 이용 동의"
          text="썸메이트 매칭을 위해 개인정보를 수집 및 이용하며, 자세한 사항은 개인정보 방침을 확인해주시기 바랍니다."
        />
      )}
    </Container>
  );
}

export default SignPage;

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import GenderCard from '../../components/GenderCard';
import ProfileOptionCard from '../../components/ProfileOptionCard';
import QuCharactor from '../../assets/QuCharactor.svg?react';
import OwlIcon from '../../assets/profile/owl.svg?react';
import FoxIcon from '../../assets/profile/fox.svg?react';
import DogIcon from '../../assets/profile/dog.svg?react';
import CatIcon from '../../assets/profile/cat.svg?react';
import Button from '../../components/Button';
import { useUser } from '../../Context/userContext.jsx';
import { useNavigate } from 'react-router-dom';
import Typical from 'react-typical'; // 타이핑 효과를 위한 라이브러리
import {
  Container,
  Title,
  ProfileOptionsContainer,
  ButtonContainer,
  QuestionWrapper,
} from './SignPage4.styled.js';

function SignPage4() {
  const { userData, updateUser } = useUser();
  const [profile, setProfile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log('selectedProfile:', profile);
    if (!profile) {
      alert('프로필 사진을 선택해주세요.');
      return;
    }
    updateUser({ profile });
    navigate('/survey');
  };

  return (
    <Container>
      <ProgressBar progress={95} timeLeft="가입까지 1초 남았어요!" />
      <QuestionWrapper>
        <Title>
          썸메이트 <br />
          <span>프로필</span> 을 만들어봐요!
        </Title>
        {/* <GenderCard imageSrc={QuCharactor} title="원하는 프로필을 골라줘!" /> */}
        <GenderCard
          Image={QuCharactor}
          title={
            <Typical
              steps={['원하는 프로필을 골라줘!', 1000]} // 타이핑 효과 적용
              loop={1}
              wrapper="span"
            />
          }
        />
      </QuestionWrapper>
      <ProfileOptionsContainer>
        <ProfileOptionCard
          Image={OwlIcon}
          isSelected={profile === 'owl'}
          onClick={() => setProfile('owl')}
        />
        <ProfileOptionCard
          Image={CatIcon}
          isSelected={profile === 'cat'}
          onClick={() => setProfile('cat')}
        />
      </ProfileOptionsContainer>
      <ProfileOptionsContainer>
        <ProfileOptionCard
          Image={DogIcon}
          isSelected={profile === 'dog'}
          onClick={() => setProfile('dog')}
        />
        <ProfileOptionCard
          Image={FoxIcon}
          isSelected={profile === 'fox'}
          onClick={() => setProfile('fox')}
        />
      </ProfileOptionsContainer>
      <ButtonContainer>
        <Button
          width={314}
          onClick={handleNext}
          theme={profile ? 'primary' : 'gray'}
          text="다음으로"
        />
      </ButtonContainer>
    </Container>
  );
}

export default SignPage4;

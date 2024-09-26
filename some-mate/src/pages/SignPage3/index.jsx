/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import kakaoIcon from '../../assets/logo/KakaoTalk_logo.png';
import GenderCard from '../../components/GenderCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import ProgressBar from '../../components/ProgressBar';
import ChatModal from '../../components/ChatModal';
import Typical from 'react-typical'; // 타이핑 효과를 위한 라이브러리
import {
  ButtonContainer,
  Container,
  Title,
  InputContainer,
  KakaoIconContainer,
  DescriptionText,
  DescriptionContainer,
  QuestionIcon,
  GenderCardContainer,
} from './SignPage3.styled';
import { useUser } from '../../Context/userContext.jsx';
import qusetion from '../../assets/qusetion.svg';

function SignPage3() {
  const { userData, updateUser } = useUser(); // 전역 상태 사용
  const [openChatLink, setOpenChatLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const navigate = useNavigate();

  const handleNext = async () => {
    if (!openChatLink) {
      alert('카카오톡 오픈채팅방 URL를 입력해주세요.');
      return;
    }
    updateUser({ openChatLink });
    navigate('/sign4');
  };

  return (
    <Container>
      <ProgressBar progress={75} timeLeft="가입까지 10초 남았어요!" />
      <Title>
        카카오톡에서
        <br />
        <span>오픈 채팅방 URL</span> 작성해주세요
      </Title>
      <GenderCardContainer>
        <GenderCard
          imageSrc={QuCharactor}
          title={
            <Typical
              steps={['매칭을위해 URL를 가져와줘!', 1000]} // 타이핑 효과 적용
              loop={1}
              wrapper="span"
            />
          }
        />
      </GenderCardContainer>

      <InputContainer>
        <KakaoIconContainer>
          <img src={kakaoIcon} alt="KakaoTalk" />
        </KakaoIconContainer>
        <InputBox
          type="text"
          placeholder="카카오톡 채팅방 URL"
          value={openChatLink}
          onChange={(e) => setOpenChatLink(e.target.value)} // 카카오톡 채팅방 URL 상태 업데이트
        />
      </InputContainer>

      <DescriptionContainer>
        <DescriptionText>
          더 자세한 url 설명을 원한다면? <br />
          옆에 <span>물음표</span>를 클릭하세요!
        </DescriptionText>
        <QuestionIcon
          src={qusetion}
          onClick={() => setIsModalOpen(true)}
          alt="Question Icon"
        />
      </DescriptionContainer>

      <ButtonContainer>
        <Button
          width={320}
          theme="brown"
          onClick={() => (window.location.href = 'kakaolink://')}
          text="카카오톡 열기"
        />
        <Button width={320} theme="gray" onClick={handleNext} text="다음으로" />
      </ButtonContainer>

      <ChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}

export default SignPage3;

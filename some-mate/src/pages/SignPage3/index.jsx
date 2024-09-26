/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import kakaoIcon from '../../assets/logo/KakaoTalk_logo.png';
import GenderCard from '../../components/GenderCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import ProgressBar from '../../components/ProgressBar';
import {
  ButtonContainer,
  Container,
  Title,
  InputContainer,
  KakaoIconContainer,
} from './SignPage3.styled';
import { useUser } from '../../Context/userContext.jsx';

function SignPage3() {
  const { userData, updateUser } = useUser();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [openChatLink, setOpenChatLink] = useState('');
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
      <GenderCard imageSrc={QuCharactor} title=" 매칭을위해 URL를 가져와줘!" />
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
      <ButtonContainer>
        <Button
          width={320}
          theme="brown"
          onClick={() => (window.location.href = 'kakaolink://')}
          text="카카오톡 열기"
        />
        <Button width={320} theme="gray" onClick={handleNext} text="다음으로" />
      </ButtonContainer>
    </Container>
  );
}

export default SignPage3;

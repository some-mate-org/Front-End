import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import GenderCard from '../../components/GenderCard';
import QuCharactor from '../../assets/QuCharactor.svg';
import ProgressBar from '../../components/ProgressBar';
import {
  ButtonContainer,
  Container,
  Title,
} from './SignPage2.styled';
import { useUser } from '../../Context/userContext.jsx';

function SignPage2() {
  const { userData, updateUser } = useUser(); // 전역 상태 사용
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [openChatLink, setOpenChatLink] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setButtonDisabled(!(name && userID && password && age));
  }, [name, userID, password, age]);

  const handleNext = () => {
    if (!name || !openChatLink || !userID || !password || !age) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    // 사용자 입력을 전역 상태에 저장
    updateUser({ name, openChatLink, userID, password, age });
    navigate('/sign3');
  };

  return (
    <Container>
         <ProgressBar progress={66} timeLeft="가입까지 15초 남았어요!" />
         <Title>
        당신의 정보를<br />
        <span>모두</span> 작성해주세요
      </Title>
      <GenderCard imageSrc={QuCharactor} title="빠짐없이 다 작성해줘!" />
      <InputBox
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)} // 이름 상태 업데이트
      />
      <InputBox
        type="text"
        placeholder="카카오톡 채팅방 URL"
        value={openChatLink}
        onChange={(e) => setOpenChatLink(e.target.value)} // 카카오톡 채팅방 URL 상태 업데이트
      />
      <InputBox
        type="text"
        placeholder="아이디"
        value={userID}
        onChange={(e) => setUserID(e.target.value)} // 아이디 상태 업데이트
      />
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
      />
      <InputBox
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)} // 나이 상태 업데이트
      />
        <ButtonContainer>
        <Button
        width={320}
        theme="gray"
        onClick={handleNext}
        text="다음으로"
      />
        </ButtonContainer>
 
    </Container>
  );
}

export default SignPage2;

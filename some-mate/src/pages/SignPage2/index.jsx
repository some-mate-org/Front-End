/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import GenderCard from '../../components/GenderCard';
import Typical from 'react-typical'; // 타이핑 효과를 위한 라이브러리
import QuCharactor from '../../assets/QuCharactor.svg';
import ProgressBar from '../../components/ProgressBar';
import {
  ButtonContainer,
  Container,
  Title,
  ErrorMessage,
  QuestionWrapper,
} from './SignPage2.styled';
import { useUser } from '../../Context/userContext.jsx';
import { checkUserId } from '../../services/checkUserId';

function SignPage2() {
  const { userData, updateUser } = useUser(); // 전역 상태 사용
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [userId, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [nameError, setNameError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const input = e.target.value;
    const namePattern = /^[a-zA-Z\u3131-\u318E\uAC00-\uD7A3]+$/;

    if (!namePattern.test(input)) {
      setNameError('이름은 한글 또는 영어로만 입력 가능합니다.');
    } else {
      setNameError('');
    }
    setName(input);
  };

  const handleAgeChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/[^0-9]/g, '');
    setAge(numericValue);
  };

  useEffect(() => {
    if (userId) {
      checkUserId(userId).then((isAvailable) => {
        if (isAvailable) {
          setUserIdError('');
        } else {
          setUserIdError('이미 사용 중인 아이디입니다.');
        }
      });
    }
  }, [userId]);

  useEffect(() => {
    setButtonDisabled(!(name && userId && password && age && !nameError));
  }, [name, userId, password, age, nameError]);

  const handleNext = () => {
    if (!name || !userId || !password || !age) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    if (userIdError) {
      alert(userIdError);
      return;
    }
    if (nameError) {
      alert(nameError);
      return;
    }
    updateUser({ name, userId, password, age });
    navigate('/sign3');
  };

  return (
    <Container>
      <ProgressBar progress={50} timeLeft="가입까지 15초 남았어요!" />
      <QuestionWrapper>
        <Title>
          당신의 정보를
          <br />
          <span>모두</span> 작성해주세요
        </Title>
        <GenderCard
          imageSrc={QuCharactor}
          title={
            <Typical
              steps={['빠짐없이 다 작성해줘!', 1000]} // 타이핑 효과 적용
              loop={1}
              wrapper="span"
            />
          }
        />
      </QuestionWrapper>
      <InputBox
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleNameChange}
      />
      {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      <InputBox
        type="text"
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserID(e.target.value)}
      />
      {userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputBox
        type="text"
        placeholder="나이"
        value={age}
        onChange={handleAgeChange}
      />
      <ButtonContainer>
        <Button
          width={320}
          theme={buttonDisabled ? 'gray' : 'primary'} // buttonDisabled에 따라 테마 변경
          onClick={handleNext}
          text="다음으로"
          disabled={buttonDisabled}
        />
      </ButtonContainer>
    </Container>
  );
}

export default SignPage2;

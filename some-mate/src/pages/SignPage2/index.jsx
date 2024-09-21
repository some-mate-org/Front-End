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
  ErrorMessage,
} from './SignPage2.styled';
import { useUser } from '../../Context/userContext.jsx';
import { checkUserId } from '../../services/checkUserId';

function SignPage2() {
  const { userData, updateUser } = useUser(); // 전역 상태 사용
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [user_id, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [nameError, setNameError] = useState(''); // 이름 유효성 에러 상태
  const navigate = useNavigate();

  // 이름 입력이 한글 또는 영어로만 되어 있는지 체크함수
  const handleNameChange = (e) => {
    const input = e.target.value;
    const namePattern = /^[a-zA-Z\u3131-\u318E\uAC00-\uD7A3]+$/;

    if (!namePattern.test(input)) {
      setNameError('이름은 한글 또는 영어로만 입력 가능합니다.');
    } else {
      setNameError(''); // 유효한 입력일 경우 에러 메시지 제거
    }
    setName(input);
  };

  // 나이에 숫자만 입력되도록 제한하는 함수
  const handleAgeChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/[^0-9]/g, ''); // 숫자 외의 문자 제거
    setAge(numericValue);
  };

  useEffect(() => {
    if (user_id) {
      checkUserId(user_id).then((isAvailable) => {
        if (isAvailable) {
          setUserIdError(''); // 사용 가능
        } else {
          setUserIdError('이미 사용 중인 아이디입니다.');
        }
      });
    }
  }, [user_id]);

  useEffect(() => {
    setButtonDisabled(!(name && user_id && password && age && !nameError));
  }, [name, user_id, password, age, nameError]);

  const handleNext = () => {
    if (!name || !user_id || !password || !age) {
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
    // 사용자 입력을 전역 상태에 저장
    updateUser({ name, user_id, password, age });
    navigate('/sign3');
  };

  return (
    <Container>
      <ProgressBar progress={66} timeLeft="가입까지 15초 남았어요!" />
      <Title>
        당신의 정보를
        <br />
        <span>모두</span> 작성해주세요
      </Title>
      <GenderCard imageSrc={QuCharactor} title="빠짐없이 다 작성해줘!" />
      <InputBox
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleNameChange} // 이름 상태 업데이트 및 유효성 검사
      />
      {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      <InputBox
        type="text"
        placeholder="아이디"
        value={user_id}
        onChange={(e) => setUserID(e.target.value)} // 아이디 상태 업데이트
      />
      {userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
      />
      <InputBox
        type="text"
        placeholder="나이"
        value={age}
        onChange={handleAgeChange} // 나이 상태 업데이트 및 숫자만 허용
      />
      <ButtonContainer>
        <Button width={320} theme="gray" onClick={handleNext} text="다음으로" disabled={buttonDisabled} />
      </ButtonContainer>
    </Container>
  );
}

export default SignPage2;

import * as S from './LoginPage.styled';
import Button from '../../components/Button';
import InputBox from '../../components/InputBox';
import check from '../../assets/check.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('user_id:', userId, 'password:', password);
      const URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${URL}/user/login`, {
        userId,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/mainuser');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요.');
    }
  };

  const handleSignupClick = () => {
    navigate('/sign');
  };

  return (
    <S.Container>
      <S.Text>
        로그인하시고 <br />
        운명의 상대를 만나보세요 :)
      </S.Text>
      <S.Back>
        <img src={check} alt="Check" />
        <S.InfoText>패스워드는 타인에게 노출되지 않아요</S.InfoText>

        <InputBox
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <S.ButtonWrapper>
          <Button
            width={270}
            theme="gray"
            text="로그인하기"
            onClick={handleLogin}
            style={{ textDecoration: 'none' }}
          />
        </S.ButtonWrapper>
      </S.Back>

      <S.ButtonContainer>
        <S.QuestionText>아직 가입하지 않았다면?</S.QuestionText>
        <Button
          width={270}
          theme="blue"
          onClick={handleSignupClick}
          text="썸메이트 가입하기"
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

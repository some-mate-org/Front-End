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

  // 서버에 로그인 요청을 보내는 함수
  const handleLogin = async () => {
    try {
      console.log('user_id:', userId, 'password:', password); // 콘솔에 출력하여 값 확인
      const URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${URL}/user/login`, {
        userId,
        password,
      });

      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
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
      <img src={check} alt="Check" />
      <S.InfoText>아이디는 타인에게 노출되지 않아요</S.InfoText>

      {/* 아이디 입력 */}
      <InputBox
        type="text"
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {/* 비밀번호 입력 */}
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <S.ButtonContainer>
        {/* 로그인 버튼 */}
        <Button
          width={270}
          theme="gray"
          text="로그인하기"
          onClick={handleLogin}
        />
        <S.QuestionText>아직 가입하지 않았다면?</S.QuestionText>

        {/* 회원가입 버튼 */}
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

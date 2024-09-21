import * as S from './LoginPage.styled';
import Button from '../../components/Button';
import InputBox from '../../components/InputBox';
import check from '../../assets/check.svg';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

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
      <InputBox type="text" placeholder="아이디" />
      <InputBox type="password" placeholder="비밀번호" />

      <S.ButtonContainer>
        <Button width={270} theme="gray" text="로그인하기" />
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

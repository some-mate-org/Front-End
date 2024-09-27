import * as S from './MatchingFailpage.styled';
import Loadingment from '../../assets/logo/Loadingment.svg?react';
import Loading from '../../assets/logo/Loading.svg?react';
import Robot from '../../assets/logo/Robot.svg?react';
import Heartbreak from '../../assets/logo/Heartbreak.svg?react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function MatchingFailpage() {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/mainuser'); 
  };

  return (
    <S.Container>
      <Loading width={250} />
      <S.RobotWrapper>
        <S.RoundImage>
          <Robot width={200} />
        </S.RoundImage>
      </S.RobotWrapper>
      <S.InfoBox>
        <S.InfoText>
          <Loadingment width={200} />
        </S.InfoText>
      </S.InfoBox>
      <S.BottomWrapper>
        <S.QuestionText>mate와 매칭을 다음 기회로 노려 보시겠습니까?</S.QuestionText>
        <Heartbreak />
        <S.SmallText>*해당 정보를 확인을 누르면 사라집니다</S.SmallText>
        <Button
          theme="gray"
          width={100}
          style={{ margin: 0 }}
          text="확인"
          onClick={handleClickBtn}
        />
      </S.BottomWrapper>
    </S.Container>
  );
}
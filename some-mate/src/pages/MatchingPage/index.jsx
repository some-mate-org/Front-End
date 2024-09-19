import * as S from './MatchingPage.styled';
import MatchingPageLogo from '../../assets/logo/MatchingPageLogo.svg?react';
import MatchedUserProfile from '../../components/MatchedUserProfile';
import MatchingLogo from '../../assets/logo/matchingLogo.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import postMatchingHistory from '../../services/postMatchingHistory';
import Button from '../../components/Button';

export default function MatchingPage() {
  const location = useLocation();
  const [matchedUserInfo, setMatchedUserInfo] = useState({});
  const [matchedUserDesc, setMatchedUserDesc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMatchedUserInfo(location.state.matchedUserInfo);
    setMatchedUserDesc(location.state.matchedUserDesc);
  }, []);

  const handleClickBtn = () => {
    //매칭 히스토리에 추가
    // const userIdx = localStorage.getItem('userIdx');
    const userIdx = 8;
    const result = postMatchingHistory(userIdx, matchedUserInfo.idx);
    console.log('result :' + result);

    navigate('/');
  };

  return (
    <S.Container>
      <S.TitleLogo>
        <MatchingPageLogo width={250} />
      </S.TitleLogo>
      <MatchedUserProfile
        matchedUserInfo={matchedUserInfo}
        matchedUserDesc={matchedUserDesc}
      />

      <S.BottomWrapper>
        <S.Text size={1}>당신의 썸메이트와 채팅을 시작하세요!</S.Text>
        <MatchingLogo width={70} />
        <S.Text size={0.7}>*해당 정보는 확인을 누르면 사라집니다</S.Text>
        <Button
          theme="gray"
          width={100}
          style={{ margin: 0 }}
          text="나가기"
          onClickFunc={handleClickBtn}
        />
      </S.BottomWrapper>
    </S.Container>
  );
}

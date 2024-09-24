import * as S from './MatchingPage.styled';
import MatchingPageLogo from '../../assets/logo/MatchingPageLogo.svg?react';
import MatchedUserProfile from '../../components/MatchedUserProfile';
import MatchingLogo from '../../assets/logo/matchingLogo.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import postMatchingHistory from '../../services/postMatchingHistory';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

export default function MatchingPage() {
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const [matchedUserInfo, setMatchedUserInfo] = useState({});
  const [matchedUserDesc, setMatchedUserDesc] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setMatchedUserInfo(location.state.matchedUserInfo);
    setMatchedUserDesc(location.state.matchedUserDesc);
    setUserId(location.state.userId);
  }, []);

  useEffect(() => {
    console.log('matchedUserInfo : ', matchedUserInfo);
    console.log('matchedUserDesc : ', matchedUserDesc);
    console.log('userId : ', userId);
  });

  const modalCancelBtn = () => {
    setIsModalOpen(false);
  };

  const modalConfirmBtn = () => {
    //매칭 히스토리에 추가
    const result = postMatchingHistory(userId, matchedUserInfo.idx);
    console.log('result :' + result);

    navigate('/');
  };

  const handleClickBtn = () => {
    setIsModalOpen(true);
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
          onClick={handleClickBtn}
        />
      </S.BottomWrapper>
      {isModalOpen && (
        <Modal
          cancelFunc={modalCancelBtn}
          confirmFunc={modalConfirmBtn}
          title="정말 나가시겠습니까?"
          text="지금 나가시는 경우, 현재 매칭된 썸메이트와는 다시 매칭되지 않습니다!"
        />
      )}
    </S.Container>
  );
}

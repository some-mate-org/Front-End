import { useState } from 'react';
import * as S from './MyProfile.styled';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import OwlIcon from '../../assets/profile/owl.svg';
import FoxIcon from '../../assets/profile/fox.svg';
import DogIcon from '../../assets/profile/dog.svg';
import CatIcon from '../../assets/profile/cat.svg';
import HeartIcon from '../../assets/icon/heart.png';
import PencilIcon from '../../assets/icon/pencil.png';
import PersonIcon from '../../assets/icon/person.png';
import SkipIcon from '../../assets/icon/skip.png';
import { useSwipeable } from 'react-swipeable';

export default function MyProfile() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    mbti: '',
    profile: '',
    gender: '',
    idx: '',
  });

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여주고 있는 카드의 인덱스
  const [matchingUsers, setMatchingUsers] = useState([
    { name: '홍길동', profile: 'owl', gender: 0, mbti: 'INTJ' },
    { name: '이순신', profile: 'cat', gender: 0, mbti: 'ENTP' },
    { name: '유관순', profile: 'dog', gender: 1, mbti: 'ENFJ' },
    { name: '이도', profile: 'fox', gender: 0, mbti: 'INFJ' },
  ]);

  const navigate = useNavigate();

  const handleRematching = () => {
    navigate('/matching');
  };

  const getProfileImage = (profile) => {
    switch (profile) {
      case 'owl':
        return OwlIcon;
      case 'fox':
        return FoxIcon;
      case 'dog':
        return DogIcon;
      case 'cat':
        return CatIcon;
      default:
        return CatIcon;
    }
  };

  const getGender = (gender) => {
    switch (gender) {
      case 0:
        return '남성';
      case 1:
        return '여성';
      default:
        return '없음';
    }
  };

  // Swipeable Hook to detect swipe events
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < matchingUsers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true, // 기본 터치 동작 방지
    trackMouse: true, // 데스크탑에서도 동작하도록 설정
  });

  return (
    <S.Container>
      <S.ProfileImageContainer>
        <img src={getProfileImage(userInfo.profile)} alt="Profile" />
      </S.ProfileImageContainer>

      <S.UserInfoContainer>
        <S.UserIconAndName>
          <img src={PersonIcon} alt="Person Icon" />
          <S.UserInfoText>{userInfo.name}</S.UserInfoText>
        </S.UserIconAndName>
        <hr />
        <S.UserInfoRow>
          <img src={HeartIcon} alt="Heart Icon" />
          <S.UserInfoText>{getGender(userInfo.gender)}</S.UserInfoText>
        </S.UserInfoRow>
        <hr />
        <S.UserInfoRow>
          <img src={PencilIcon} alt="Pencil Icon" />
          <S.UserInfoText>{userInfo.age}살</S.UserInfoText>
        </S.UserInfoRow>
        <hr />
        <S.UserInfoRow>
          <img src={SkipIcon} alt="Skip Icon" />
          <S.UserInfoText>{userInfo.mbti}</S.UserInfoText>
        </S.UserInfoRow>
      </S.UserInfoContainer>

      <S.MatchingHistoryTitle>matching history</S.MatchingHistoryTitle>

      {/* Swipeable area */}
      <div {...swipeHandlers} style={{ touchAction: 'pan-y', width: '100%' }}>
        <S.MatchingUserCard>
          <img src={getProfileImage(matchingUsers[currentIndex].profile)} alt={matchingUsers[currentIndex].name} />
          <S.UserInfoText>{matchingUsers[currentIndex].name}</S.UserInfoText>
          <S.UserInfoText>{getGender(matchingUsers[currentIndex].gender)}</S.UserInfoText>
          <S.UserInfoText>{matchingUsers[currentIndex].mbti}</S.UserInfoText>
        </S.MatchingUserCard>
      </div>

      <Button
        width={270}
        theme="primary"
        text="썸메이트 다시 찾아보기"
        onClick={handleRematching}
      />

      {/* <S.StyledLink to="/login" onClick={handleLogout}>
        로그아웃
      </S.StyledLink> */}
    </S.Container>
  );
}

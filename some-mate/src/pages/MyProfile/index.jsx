import { useState } from 'react';
import * as S from './MyProfile.styled';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import OwlIcon from '../../assets/profile/owl.svg';
import FoxIcon from '../../assets/profile/fox.svg';
import DogIcon from '../../assets/profile/dog.svg';
import CatIcon from '../../assets/profile/cat.svg';
import HeartIcon from '../../assets/icon/heart.svg';
import PencilIcon from '../../assets/icon/pencil.svg';
import PersonIcon from '../../assets/icon/person.svg';
import SkipIcon from '../../assets/icon/skip.svg';


export default function MyProfile() {
  const [userInfo, setUserInfo] = useState({
    name: '이지수',
    age: '25',
    mbti: 'INFJ',
    profile: 'owl',
    gender: 0,
    idx: '12345',
  });

  const [matchingUsers] = useState([
    { name: '홍길동', profile: 'owl', gender: 0, mbti: 'INTJ', openchat_link: 'https://open.kakao.com/o/홍길동' },
    { name: '이순신', profile: 'cat', gender: 0, mbti: 'ENTP', openchat_link: 'https://open.kakao.com/o/이순신' },
    { name: '유관순', profile: 'dog', gender: 1, mbti: 'ENFJ', openchat_link: 'https://open.kakao.com/o/유관순' },
    { name: '이도', profile: 'fox', gender: 0, mbti: 'INFJ', openchat_link: 'https://open.kakao.com/o/이도' },
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

  const handleOpenChat = (openchatLink) => {
    window.open(openchatLink, '_blank');
  };

 return (
    <S.Container>
      <S.ProfileImageContainer>
        <img src={getProfileImage(userInfo.profile)} />
      </S.ProfileImageContainer>
  
      <S.UserInfoContainer>
        <S.UserIconAndName>
          <img src={PersonIcon} />
          <S.UserInfoText>{userInfo.name}</S.UserInfoText>
        </S.UserIconAndName>
        <hr />
        <S.UserInfoRow>
          <img src={HeartIcon} />
          <S.UserInfoText>{getGender(userInfo.gender)}</S.UserInfoText>
        </S.UserInfoRow>
        <hr />
        <S.UserInfoRow>
          <img src={PencilIcon} />
          <S.UserInfoText>{userInfo.age}살</S.UserInfoText>
        </S.UserInfoRow>
        <hr />
        <S.UserInfoRow>
          <img src={SkipIcon} />
          <S.UserInfoText>{userInfo.mbti}</S.UserInfoText>
        </S.UserInfoRow>
      </S.UserInfoContainer>
  
      <S.MatchingHistoryTitle>이전 썸메이트 ▶️</S.MatchingHistoryTitle>
  
      <S.CarouselContainer>
      {matchingUsers.map((user, index) => (
        <S.Slide key={index} index={index}> 
          <img src={getProfileImage(user.profile)} alt={user.name} />
          <S.UserInfoCarouselContainer>
            <S.UserInfoTextCarousel>✏️ :{user.name}</S.UserInfoTextCarousel>
            <S.UserInfoTextCarousel>💛 :{getGender(user.gender)}</S.UserInfoTextCarousel>
            <S.UserInfoTextCarousel>✨ :{user.mbti}</S.UserInfoTextCarousel>
            <S.openChatButton onClick={() => handleOpenChat(user.openchat_link)}>
              채팅 시작하기
            </S.openChatButton>
          </S.UserInfoCarouselContainer>
        </S.Slide>
      ))}
    </S.CarouselContainer>
  
      <Button
        width={270}
        theme="primary"
        text="썸메이트 다시 찾아보기"
        onClick={handleRematching}
      />
    </S.Container>
  );
}

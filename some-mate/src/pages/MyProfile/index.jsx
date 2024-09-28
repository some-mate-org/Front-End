import { useEffect, useState } from 'react';
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
import axios from 'axios';
import getMatchedUserHistory from '../../services/getMatchedUserHistory';

export default function MyProfile() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    mbti: '',
    profile: '',
    gender: '',
  });
  const [matchingUserList, setMatchingUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // 사용자 정보를 설정하는 함수
  const setUserInfoData = (data) => {
    setUserInfo({
      name: data.name,
      age: data.age,
      mbti: data.mbti,
      profile: data.profile,
      gender: data.gender,
    });
  };

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async (token) => {
    const URL = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.get(`${URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 토큰 형식으로 전송
        },
      });

      if (response.data) {
        setUserInfoData(response.data);
      } else {
        setErrorMessage('사용자 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      if (error.response && error.response.status === 403) {
        // 토큰이 만료된 경우
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          fetchUserInfo(newAccessToken); // 새로 갱신한 토큰으로 다시 요청
        } else {
          setErrorMessage(
            '로그인 세션이 만료되었습니다. 다시 로그인해 주세요.'
          );
        }
      } else {
        setErrorMessage('사용자 정보를 불러오는데 실패했습니다.');
      }
    }
  };

  // 첫 렌더링 시 사용자 정보 가져오기
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('AccessToken:', accessToken); // 확인용

    if (accessToken) {
      fetchUserInfo(accessToken); //사용자 정보 불러오기
      getMatchedUserHistory(setMatchingUserList, accessToken);
    } else {
      setErrorMessage('로그인 정보가 없습니다.');
      navigate('/login'); // accessToken이 없으면 로그인 페이지로 이동
    }
  }, [navigate]);

  // Refresh token을 사용하여 access token을 갱신하는 함수
  const refreshAccessToken = async () => {
    const URL = import.meta.env.VITE_API_URL;
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await axios.post(`${URL}/user/refresh`, {
        refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      handleLogout(); // 실패 시 로그아웃 처리
      return null;
    }
  };

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  const handleRematching = () => {
    window.location.href = '/matching';
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
        {matchingUserList != null ? (
          matchingUserList.map((user, index) => (
            <S.Slide
              key={index}
              index={index}
              itemcount={matchingUserList.length}
            >
              <img src={getProfileImage(user.profile)} alt={user.name} />
              <S.UserInfoCarouselContainer>
                <S.UserInfoTextCarousel>✏️ {user.name}</S.UserInfoTextCarousel>
                <S.UserInfoTextCarousel>
                  💛 {getGender(user.gender)}
                </S.UserInfoTextCarousel>
                <S.UserInfoTextCarousel>✨ {user.mbti}</S.UserInfoTextCarousel>
                <S.openChatButton
                  onClick={() => handleOpenChat(user.openchat_link)}
                >
                  채팅 시작하기
                </S.openChatButton>
              </S.UserInfoCarouselContainer>
            </S.Slide>
          ))
        ) : (
          <div>없습니다.</div>
        )}
      </S.CarouselContainer>

      <Button
        width={270}
        theme="primary"
        text="썸메이트 다시 찾아보기"
        onClick={handleRematching}
      />
      <S.StyledLink to="/login" onClick={handleLogout}>
        로그아웃
      </S.StyledLink>
    </S.Container>
  );
}

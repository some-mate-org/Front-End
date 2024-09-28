import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './MainuserPage.styled';
import Button from '../../components/Button';
import Info from '../../components/Info';
// import MainLogo from '../../assets/logo/MainLogo.svg?react';
import { useNavigate } from 'react-router-dom';
import OwlIcon from '../../assets/profile/owl.svg';
import FoxIcon from '../../assets/profile/fox.svg';
import DogIcon from '../../assets/profile/dog.svg';
import CatIcon from '../../assets/profile/cat.svg';

export default function MainuserPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    mbti: '',
    profile: '',
    gender: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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
    navigate('/matching');
  };

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
      fetchUserInfo(accessToken);
    } else {
      setErrorMessage('로그인 정보가 없습니다.');
      navigate('/login'); // accessToken이 없으면 로그인 페이지로 이동
    }
  }, [navigate]);
 

  // 프로필 이미지를 선택하는 함수
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
        return; // 기본 프로필 이미지
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

  return (
    <S.Container>
      {/* <MainLogo  /> */}
      {errorMessage && <p>{errorMessage}</p>}
      <S.ProfileImageContainer>
        <img src={getProfileImage(userInfo.profile)} alt="Profile" />
      </S.ProfileImageContainer>
      <Info text={`이름: ${userInfo.name}`} />
      <Info text={`성별: ${getGender(userInfo.gender)}`} />
      <Info text={`나이: ${userInfo.age}`} />
      <Info text={`MBTI: ${userInfo.mbti}`} />
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

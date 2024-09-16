// import { useEffect } from 'react';
// import React, { useState } from 'react';
import * as S from './MatchingPage.styled';
import MatchingPageLogo from '../../assets/logo/MatchingPageLogo.svg?react';
import MatchedUserProfile from '../../components/MatchedUserProfile';
// import { useLocation } from 'react-router-dom';
import MatchingLogo from '../../assets/logo/matchingLogo.svg?react';
import { GrayButton } from '../../components/Button/Button.styled';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MatchingPage() {
  const location = useLocation();
  const [matchedUserInfo, setMatchedUserInfo] = useState({});
  const [matchedUserDesc, setMatchedUserDesc] = useState([]);
  useEffect(() => {
    setMatchedUserInfo(location.state.matchedUserInfo);
    setMatchedUserDesc(location.state.matchedUserDesc);
  }, []);
  console.log(matchedUserInfo);

  return (
    <S.Container>
      <S.TitleLogo>
        <MatchingPageLogo width={250} />
      </S.TitleLogo>
      <MatchedUserProfile matchedUserInfo={matchedUserInfo} matchedUserDesc={matchedUserDesc} />

      <S.BottomWrapper>
        <S.Text size={1}>당신의 썸메이트와 채팅을 시작하세요!</S.Text>
        <MatchingLogo width={70} />
        <S.Text size={0.7}>*해당 정보는 확인을 누르면 사라집니다</S.Text>
        <GrayButton width={100} style={{ margin: 0 }}>
          나가기
        </GrayButton>
      </S.BottomWrapper>
    </S.Container>
  );
}

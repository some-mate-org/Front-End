import * as S from './MatchedUserProfile.styled';
import KakaoLogo from '../../assets/logo/kakaoLogo.svg?react';

export default function MatchedUserProfile({
  matchedUserInfo,
  matchedUserDesc,
}) {
  const handleClickBtn = () => {
    const url = matchedUserInfo.openchat_link;
    window.open(url, '_blank');
  };

  return (
    <S.Container>
      <S.ImgBox>
        <img src={`/${matchedUserInfo.profile}.svg?react`} />
      </S.ImgBox>
      <S.Wrapper>
        <S.KakaotalkUrlWrapper>
          <KakaoLogo width={58} />
          <S.openChatButton onClick={handleClickBtn}>
            채팅 시작하기
          </S.openChatButton>
        </S.KakaotalkUrlWrapper>
        <S.Text size={1}>
          이름은 {matchedUserInfo.name}이고 나이는 {matchedUserInfo.age}입니다.{' '}
        </S.Text>
        <S.Text size={1}>
          연애할 때 저는... {matchedUserDesc.map((item, index) => item)}
        </S.Text>
      </S.Wrapper>
    </S.Container>
  );
}

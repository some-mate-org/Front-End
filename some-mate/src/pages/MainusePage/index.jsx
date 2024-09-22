import * as S from './MainuserPage.styled';
import Button from '../../components/Button';
import Info from '../../components/Info';
import MainLogo from '../../assets/logo/MainLogo.svg';

export default function MainuserPage() {
  return (
    <S.Container>
      <img src={MainLogo} alt="Main Logo" />
      <S.ProfileImageContainer>
        <img src=""/>
      </S.ProfileImageContainer>
      <Info text="김쾌녀" />  
      <Info text="나이" />
      <Info text="ENFJ" />
      <Button
        width={270}
        theme="gray"
        text="썸메이트 다시 찾아보기"
      />
      <S.StyledLink to="/login">로그아웃</S.StyledLink>
    </S.Container>
  );
}

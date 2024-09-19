// import React from 'react';
import ProjectLogo from '../../assets/logo/ProjectLogo.svg?react';
import * as S from './MainPage.styled';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import Image1 from '../../assets/img/1.svg?react';
import Image2 from '../../assets/img/2.svg?react';
import Image3 from '../../assets/img/3.svg?react';

export default function MainPage() {
  const images = [Image1, Image2, Image3];
  console.log(images); // SVG가 저장되어 있으니까 바로 컴포넌트처럼 사용 가능

  return (
    <S.Wrapper>
      <S.TitleLogo>
        <ProjectLogo />
      </S.TitleLogo>
      <Button text="썸메이트 가입하기" width={228} theme="gray" />
      <S.Text>
        이미 계정이 있다면?<S.StyledLink to="/login">로그인 하기</S.StyledLink>
      </S.Text>
      <Carousel images={images} />
    </S.Wrapper>
  );
}

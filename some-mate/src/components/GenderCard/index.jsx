import * as S from './GenderCard.styled';

const GenderCard = ({ imageSrc, title }) => {
  return (
    <S.GenderCardWrapper>
      <S.Image src={imageSrc} alt="Gender Icon" />
      <S.TitleButton>{title}</S.TitleButton>
    </S.GenderCardWrapper>
  );
};

export default GenderCard;

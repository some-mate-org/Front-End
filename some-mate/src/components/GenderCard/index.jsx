import * as S from './GenderCard.styled';

const GenderCard = ({ Image, title }) => {
  return (
    <S.GenderCardWrapper>
      <Image />
      <S.TitleButton>{title}</S.TitleButton>
    </S.GenderCardWrapper>
  );
};

export default GenderCard;

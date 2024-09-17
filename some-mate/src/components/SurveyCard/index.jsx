import * as S from './SurveyCard.styled';

const SurveyCard = ({ title, onClick }) => {
  return (
    <S.CardContainer onClick={onClick}>
      <S.OptionText>{title}</S.OptionText>
    </S.CardContainer>
  );
};

export default SurveyCard;

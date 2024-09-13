import { OptionCardContainer, OptionImage, OptionText } from './GenderOptionCard.styled';

const GenderOptionCard = ({ imageSrc, title }) => {
  return (
    <OptionCardContainer>
      <OptionImage src={imageSrc} alt={title} />
      <OptionText>{title}</OptionText>
    </OptionCardContainer>
  );
};

export default GenderOptionCard;

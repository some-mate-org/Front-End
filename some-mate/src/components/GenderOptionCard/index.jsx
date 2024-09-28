// GenderOptionCard.js
import {
  OptionCardContainer,
  OptionImage,
  OptionText,
} from './GenderOptionCard.styled';

const GenderOptionCard = ({ Image, title, onClick }) => {
  // onClick 추가
  return (
    <OptionCardContainer onClick={onClick}>
      <Image />
      <OptionText>{title}</OptionText>
    </OptionCardContainer>
  );
};

export default GenderOptionCard;

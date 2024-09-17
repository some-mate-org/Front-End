// ProfileOptionCard.js
import { OptionCardContainer, OptionImage, OptionText } from './ProfileOptionCard.styled';

const ProfileOptionCard = ({ imageSrc, title, onClick }) => { // onClick 추가
  return (
    <OptionCardContainer onClick={onClick}> 
      <OptionImage src={imageSrc} alt={title} />
      <OptionText>{title}</OptionText>
    </OptionCardContainer>
  );
};

export default ProfileOptionCard;

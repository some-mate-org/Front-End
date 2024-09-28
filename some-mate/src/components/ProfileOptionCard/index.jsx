// ProfileOptionCard.js
import { OptionCardContainer, OptionText } from './ProfileOptionCard.styled';

const ProfileOptionCard = ({ Image, title, onClick }) => {
  // onClick 추가
  return (
    <OptionCardContainer onClick={onClick}>
      <Image />
      <OptionText>{title}</OptionText>
    </OptionCardContainer>
  );
};

export default ProfileOptionCard;

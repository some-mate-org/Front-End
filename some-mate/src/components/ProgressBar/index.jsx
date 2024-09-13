// src/components/ProgressBar.jsx
import * as S from './ProgressBar.styled';

const ProgressBar = ({ progress, timeLeft }) => {
  return (
    <div>
      <S.ProgressBarContainer>
        <S.ProgressFill style={{ width: `${progress}%` }} />
      </S.ProgressBarContainer>
      <S.ProgressText>{timeLeft}</S.ProgressText>
    </div>
  );
};

export default ProgressBar;

import * as S from './Modal.styled';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onClose }) => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/');
  };

  return (
    <S.ModalBackground> {/* 배경 흐림 처리 추가 */}
      <S.ModalContainer>
        <S.DelayButton>잠시만요</S.DelayButton>
        <S.ModalText>
          개인정보 수집 및 이용 동의
          <br />
          “개인정보를 수집 및 이용하며, 자세한 사항은 개인정보 방침을 확인해주세요.”
        </S.ModalText>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleNext}>취소/닫기</S.CancelButton>
          <S.ConfirmButton onClick={onClose}>알겠습니다</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;

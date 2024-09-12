import * as S from './Modal.styled';

const Modal = ({ onClose }) => {
  return (
    <S.ModalContainer>
      <S.DelayButton>잠시만요</S.DelayButton>
      <S.ModalText>
        개인정보 수집 및 이용 동의
        <br />
        “개인정보를 수집 및 이용하며, 자세한 사항은 개인정보 방침을 확인해주세요.”
      </S.ModalText>
      <S.ButtonContainer>
        <S.CancelButton onClick={onClose}>취소/닫기</S.CancelButton>
        <S.ConfirmButton onClick={onClose}>알겠습니다</S.ConfirmButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default Modal;

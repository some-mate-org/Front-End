import * as S from './Modal.styled';

const Modal = ({ cancelFunc, confirmFunc, title, text }) => {

  return (
    <S.ModalBackground> {/* 배경 흐림 처리 추가 */}
      <S.ModalContainer>
        <S.DelayButton>⚠️{title}</S.DelayButton>
        {/* <S.ModalTitle>개인정보 수집 및 이용 동의</S.ModalTitle> */}
        <S.ModalText>{text}</S.ModalText>
        <S.ButtonContainer>
          <S.CancelButton onClick={cancelFunc}>취소/닫기</S.CancelButton>
          <S.ConfirmButton onClick={confirmFunc}>알겠습니다</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;

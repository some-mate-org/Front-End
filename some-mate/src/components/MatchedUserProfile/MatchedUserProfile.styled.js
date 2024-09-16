import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  /* height: 50%; */
  /* height: fit-content; */
  display: flex;
  position: relative;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  padding: 0 1rem;
  border: solid 3px rgba(163, 209, 251, 0.45);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  /* margin-top: 5rem; */
  width: -webkit-fill-available;
  word-break: break-all;
  background-color: #e2f1ff;
  margin: 0 0.8rem;
  padding: 1rem;
  border-radius: 10%;
  margin-top: 4rem;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  z-index: 10;
  background-color: #8bc4ef;
  text-align: center;
  position: absolute;
  /* margin: 0.5rem; */
`;

export const Text = styled.div`
  ${({ size }) => `font-size: ${size}rem;`}
  width:auto;
  font-weight: bold;
  padding: 0.1rem;
  color: #737373;
  word-wrap: break-word; /* 긴 단어가 있으면 줄바꿈 */
  overflow-wrap: break-word; /* 브라우저 호환성을 위한 추가 */
`;

export const KakaotalkUrlWrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
  margin-top: 3.3rem;
  margin-bottom: 1rem;
`;

export const openChatButton = styled.button`
  height: 3rem;
  background-color: rgba(59, 27, 27, 0.9);
  font-size: 15px;
  font-weight: bold;
  color: #fae000;
  border-radius: 10px;
  padding: 1rem;
`;

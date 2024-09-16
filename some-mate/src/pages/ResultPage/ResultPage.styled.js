import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 1rem; */
  padding: 0 0.8rem;
`;

export const Text = styled.div`
  ${({ size }) => `font-size: ${size}px;`};
  font-weight: bold;
  ${({ color }) => `color: ${color};`};
  padding: 3.5px;
`;

export const ImageWrapper = styled.div`
  width: 12rem;
  height: 12rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* margin-top: 1rem; */
`;

export const DescWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 0 1rem 0;
  margin: 0.2rem 0rem 0.8rem 0rem;
  border-bottom: 1.5px solid #e4e1e1;
  padding: 1rem 2rem;
`;

export const Desc = styled.li`
  padding: 0.5rem;
  color: #737373;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  position: relative;
  list-style-type: none; /* 기본 마커 제거 */

  /* 커스텀 마커 추가 */
  &::before {
    content: '';
    position: absolute;
    left: -12px; /* 마커가 리스트 아이템의 왼쪽에 위치하도록 조정 */
    top: 50%;
    transform: translateY(-50%);
    width: 8px; /* 마커의 너비 */
    height: 8px; /* 마커의 높이 */
    border-radius: 50%; /* 원형 마커 */
    background-color: #737373; /* 마커의 색상 */
  }
`;

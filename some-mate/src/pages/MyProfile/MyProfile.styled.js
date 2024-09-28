import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const ProfileImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: #8bc4ef;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

export const UserInfoContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

export const UserInfoCarouselContainer = styled.div`
  text-align: left;
  padding: 1.5rem;
`;

export const UserIconAndName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export const MatchingHistoryTitle = styled.h3`
  margin-left: 1rem;
  font-size: 15px;
  margin-right: 15rem;
  font-weight: bold;
  color: #BE9D9D;
  background-color: #EEEDED;
  border-radius: 20px;
  padding: 10px;
  width: 30%;
  text-align: center;
`;

export const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export const UserInfoText = styled.span`
  font-size: 18px;
  color: black;
  display: block;
  margin: 0 3px;
`;

export const UserInfoTextCarousel = styled.span`
  font-size: 17px;
  color: #8E8E8E;
  font-weight: bold;
  display: block;
  margin: 0 3px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  margin-bottom: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const openChatButton = styled.button`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  background-color: rgba(59, 27, 27, 0.9);
  font-size: 13px;
  font-weight: bold;
  color: #fae000;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(59, 27, 27, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  height: 150px;
  background-color: ${({ index }) => {
    const colors = ['#EEEDED', '#ceeaff', '#ffebcd', '#ffe4e1'];
    return colors[index % colors.length];
  }};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-left: 3rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

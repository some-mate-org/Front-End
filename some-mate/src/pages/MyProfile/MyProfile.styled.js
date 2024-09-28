import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserInfoContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
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
`;

export const MatchingHistoryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px 0;
`;

export const MatchingHistoryBox = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory; /* Enable horizontal scroll snapping */
  scroll-behavior: smooth; /* Smooth scrolling behavior */
  width: 100%;
  padding: 10px 0;
  margin-bottom: 20px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }
`;

export const MatchingUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #f4f4f9;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
`;


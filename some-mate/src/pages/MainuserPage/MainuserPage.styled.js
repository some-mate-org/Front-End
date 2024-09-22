import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #6B6969; 
  margin-top: 40px; 
`;

export const StyledLink = styled(Link)`
  font-size: 17px;
  color: #989494; 
  text-decoration: none; 
  margin-top: 10px; 
  display: block;
`;

export const ProfileImageContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;  
  background-color: #8BC4EF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px auto;  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

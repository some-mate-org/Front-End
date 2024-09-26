import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleLogo = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 13px;
  font-weight: light;
  color: black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: normal;
  margin-left: 5px;
`;

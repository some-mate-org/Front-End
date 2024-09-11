import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleLogo = styled.div`
  margin-top: 6.2rem;
  margin-bottom: 0%.7;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 11px;
  font-weight: light;
  color: black;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: normal;
  margin-left: 5px;
`;

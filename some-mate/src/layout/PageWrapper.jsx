// import React from 'react';
import * as S from './PageWrapper.styled';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function PageWrapper() {
  return (
    <S.PageWrapper>
      <Header />
      <S.PageContent>
        <Outlet />
      </S.PageContent>
    </S.PageWrapper>
  );
}

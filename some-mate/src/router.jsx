import { createBrowserRouter } from 'react-router-dom';
import PageWrapper from './layout/PageWrapper';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import SignPage2 from './pages/SignPage2';
import SignPage3 from './pages/SignPage3';
import SignPage4 from './pages/SignPage4';
import SurveyPage from './pages/SurveyPage';


import ResultPage from './pages/ResultPage';
import MatchingPage from './pages/MatchingPage';
import LoginPage from './pages/LoginPage';
import MainuserPage from './pages/MainusePage';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/login',
    element: <PageWrapper />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/sign',
    element: <PageWrapper />,
    children: [{ index: true, element: <SignPage /> }],
  },
  {
    path: '/sign2',
    element: <PageWrapper />,
    children: [{ index: true, element: <SignPage2 /> }],
  },
  {
    path: '/sign3',
    element: <PageWrapper />,
    children: [{ index: true, element: <SignPage3 /> }],
  },
  {
    path: '/sign4',
    element: <PageWrapper />,
    children: [{ index: true, element: <SignPage4 /> }],
  },
  {
    path: '/result/:result',
    element: <PageWrapper />,
    children: [{ index: true, element: <ResultPage /> }],
  },
  {
    path: '/matching',
    element: <PageWrapper />,
    children: [{ index: true, element: <MatchingPage /> }],
  },
  {
    path: '/survey',
    element: <PageWrapper />,
    children: [{ index: true, element: <SurveyPage /> }],
  },
  {
    path: '/mainuser',
    element: <PageWrapper />,
    children: [{ index: true, element: <MainuserPage /> }],
  },
]);

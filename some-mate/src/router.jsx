import { createBrowserRouter } from 'react-router-dom';
import PageWrapper from './layout/PageWrapper';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import ResultPage from './pages/ResultPage';
import MatchingPage from './pages/MatchingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/sign',
    element: <PageWrapper />,
    children: [{ index: true, element: <SignPage /> }],
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
]);

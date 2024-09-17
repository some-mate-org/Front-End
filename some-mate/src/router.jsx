import { createBrowserRouter } from 'react-router-dom';
import PageWrapper from './layout/PageWrapper';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import SurveyPage from './pages/SurveyPage';
import SurveyPage from './pages/SurveyPage';



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
    path: '/survey',
    element: <PageWrapper />,
    children: [{ index: true, element: <SurveyPage /> }],
  },
  {
    path: '/survey',
    element: <PageWrapper />,
    children: [{ index: true, element: <SurveyPage /> }],
  },
]);


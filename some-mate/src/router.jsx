import { createBrowserRouter } from 'react-router-dom';
import PageWrapper from './layout/PageWrapper';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import SignPage2 from './pages/SignPage2';
import SignPage3 from './pages/SignPage3';
<<<<<<< HEAD
<<<<<<< HEAD
import SurveyPage from './pages/SurveyPage';


=======
=======
import SignPage2 from './pages/SignPage2';
import SignPage3 from './pages/SignPage3';
>>>>>>> 20401c4 (frontend signup)
import ResultPage from './pages/ResultPage';
import MatchingPage from './pages/MatchingPage';
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
=======
=======
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
>>>>>>> 20401c4 (frontend signup)
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

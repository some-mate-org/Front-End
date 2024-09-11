import { createBrowserRouter } from 'react-router-dom';
import PageWrapper from './layout/PageWrapper';
import MainPage from './pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [{ index: true, element: <MainPage /> }],
  },
]);

import Layout from '@/pages/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Users = lazy(() => import('@/pages/Users'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'tweets',
          element: <Users />,
        },
      ],
    },
  ],
  { basename: '/goit-test-tweets/' }
);

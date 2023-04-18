import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Layout = lazy(() => import('@/pages/Layout'));
const Users = lazy(() => import('@/pages/Users'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
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

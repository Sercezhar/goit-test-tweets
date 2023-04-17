import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Layout = lazy(() => import('@/pages/Layout'));
const Users = lazy(() => import('@/pages/Users'));

export const router = createBrowserRouter([
  {
    path: '/goit-test-tweets/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

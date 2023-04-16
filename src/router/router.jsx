import Homepage from '@/pages/Homepage';
import Layout from '@/pages/Layout';
import Users from '@/pages/Users';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/goit-test-tweets/',
    element: <Layout />,
    children: [
      {
        path: '/goit-test-tweets/',
        element: <Homepage />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

import AppLayout from '@/layout/AppLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/about',
        element: <h1>About</h1>,
      },
      {
        path: '/portfolio',
        element: <h1>Portfolio</h1>,
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>,
      },
    ],
  },
]);

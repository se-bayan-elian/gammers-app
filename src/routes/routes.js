import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGaurd';
import AdminGuard from '../components/Guards/AdminGuard';
import GamesOutlet from '../components/GmaesOutlet';
import { PATHS } from './paths';
import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage'))
const NotFound = lazy(() => import('../pages/NotFound'));
const SignupPage = lazy(() => import('../pages/SignupPage'))
const GamesPage = lazy(() => import('../pages/GamesPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));


const commonPages = (additional = [], isUser) => [
  {
    path: '/',
    element: (
      <GamesPage />
    ),
    children: [
      {
        path: (isUser ? 'user/' : 'admin/') + PATHS.Home,
        element: <GamesOutlet />,
      },
      {
        path: (isUser ? 'user/' : 'admin/') + PATHS.PROFILE,
        element: <ProfilePage />,
      },
      ...additional
    ],
  }
];
const authPages = [
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: PATHS.AUTH.SIGNUP,
    element: <SignupPage />,
  },
];
const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      ...commonPages([{
        path: PATHS.ADMIN.USERS,
        element: <UsersPage />,
      }], false),

    ],
  },
];

const userPages = [
  {
    path: '/',
    element: <UserGuard />,
    children: [
      ...commonPages([], true)
    ]


  }
];

const guestPages = [
  {
    path: '/',
    element: <GuestGuard />,
    children: [...authPages],
  },
];

// available for all roles
const routes = [
  ...guestPages,
  ...userPages,
  ...adminPages,
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: "*",
    element: <h1>kfkgfjg</h1>,
  },

];

export default routes;

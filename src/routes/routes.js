import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGaurd';
import AdminGuard from '../components/Guards/AdminGuard';
import { PATHS } from './paths';
import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage'))
const NotFound = lazy(() => import('../pages/NotFound'));
const SignupPage = lazy(() => import('../pages/SignupPage'))
const GamesOutlet = lazy(() => import('../components/GmaesOutlet'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));



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
    path:'/admin',
    element: <AdminGuard />,
    children: [
      {
        path : PATHS.Home,
        element : <GamesOutlet/>
      },
      {
        path : PATHS.PROFILE,
        element : <ProfilePage />,
      },
      {
        path : PATHS.ADMIN.USERS,
        element : <UsersPage/>
      }

    ],
  },
];

const userPages = [
  {
    path: '/user',
    element: <UserGuard />,
    children: [
      {
        path : PATHS.Home,
        element : <GamesOutlet />
      },
      {
        path : PATHS.PROFILE,
        element : <ProfilePage />,
      }
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
    element:<NotFound />,
  },

];

export default routes;

import { PATHS } from './paths';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import GamesPage from '../pages/GamesPage';
import ProfilePage from '../pages/ProfilePage';
import UsersPage from '../pages/UsersPage';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGaurd';
import AdminGuard from '../components/Guards/AdminGuard';
import NotFound from '../pages/NotFound';
import GamesOutlet from '../components/GmaesOutlet';


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
    path: PATHS.AUTH.SIGNIN,
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

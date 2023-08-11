export const PATHS = {
  AUTH: {
    SIGNIN: "/login",
    SIGNUP: "/signup",
  },
  Home: "home",
  PROFILE: "account",
  ADMIN: {
    ROOT: '/',
    USERS: "users",
  },
  NOT_FOUND: "*"
}
export const AUTH_API_ENDPOINT = {
  LOGIN: 'users/login',
  SIGNUP: 'users/signup',
  PROFILE: 'users/profile',
  USERS: 'users',
  DELETE_USER: 'users/:id',
};
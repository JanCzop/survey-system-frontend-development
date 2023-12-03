type User = {
  email: string;
  username: string;
  token: string;
  isAuthenticated: boolean;
};

type CreateUser = {
  email: string;
  username: string;
  password: string;
};

type LoginUser = {
  email: string;
  username?: string;
  password: string;
};

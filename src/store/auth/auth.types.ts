export type User = {
  codigo: number;
  username: string;
  nickname: string;
  date: string;
};

export type UserContextSchema = {
  user: User;
  isAuthenticated: boolean;
  signIn: (payload: SignInPayload) => Promise<void>;
};

export type SignInPayload = {
  username: string;
  password: string;
};

export type SignInRequestData = {
  token: string;
  user: User;
};

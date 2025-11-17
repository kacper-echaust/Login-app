export type User = {
  username: string;
  password: string;
  id: string;
};
export type Login = Omit<User, "id">;
export type Register = {
  username: string;
  password: string;
  terms: boolean;
};

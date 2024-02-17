export interface IUser {
  email: string;
  password: string;
  username: string;
  address: string;
}
export interface IFormInput {
  type: string;
  name: keyof IUser;
  label: string;
  id: string;
}

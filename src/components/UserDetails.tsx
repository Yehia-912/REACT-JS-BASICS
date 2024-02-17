import { IUser } from "../interfaces";

interface IProps {
  user: IUser;
}
const UserDetails = ({ user }: IProps) => {
  const { email, password, address, username } = user;
  
  return (
    <div style={{ margin: 30 }}>
      <div>Your username is: {username}</div>
      <div>Your email is: {email}</div>
      <div>Your address is: {address}</div>
      <div>Your Password is: {password}</div>
    </div>
  );
};

export default UserDetails;

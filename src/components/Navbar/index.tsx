import { ReactNode } from "react";
import "./style.scss";
import { IUser } from "../../interfaces";

interface IProps {
  compName: string;
  contact: number;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  children: ReactNode;
  userData: IUser;
}
const Navbar = ({ userData, compName, isLoggedIn, setIsLoggedIn }: IProps) => {
  return (
    <nav>
      <ul className="nav-list">
        <li style={{ fontWeight: "bold", fontSize: 17 }}>
          <a href="/">{compName}</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <button
          onClick={(): void => {
            if (
              userData.address == "" ||
              userData.email == "" ||
              userData.username == "" ||
              userData.password == ""
            )
              return;
            setIsLoggedIn(!isLoggedIn);
          }}
          style={{ backgroundColor: "#d4d4d4" }}
        >
          {!isLoggedIn ? "Login" : "Logout"}
        </button>
      </ul>
    </nav>
  );
};
export default Navbar;

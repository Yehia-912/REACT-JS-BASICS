import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LogForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import { IUser } from "./interfaces";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUser>({
    username: "",
    email: "",
    address: "",
    password: "",
  });

  const company = "CODE";
  return (
    <>
      <Navbar
        compName={company}
        contact={11}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userData={userData}
      >
        <span>Hello</span>
      </Navbar>
      {isLoggedIn ? (
        <UserDetails user={userData} />
      ) : (
        <LogForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;

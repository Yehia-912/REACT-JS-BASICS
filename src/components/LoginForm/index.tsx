import { IUser } from "../../interfaces";
import { FORMINPUTLIST } from "../../data";
import "./style.scss";
import { Fragment } from "react";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUser;
  setUserData: (val: IUser) => void;
}
const LogForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  // ** handlers
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  // ** renders
  const renderFormInputList = FORMINPUTLIST.map((input) => (
    <Fragment key={input.id}>
      <div>
        <label htmlFor={input.id}>{input.label}:</label> <br />
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
      <br />
    </Fragment>
  ));
  // const { email, password, username, address } = userData;
  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {renderFormInputList}
      <button
        onClick={(): void => {
          if (
            userData.address == "" ||
            userData.email == "" ||
            userData.username == "" ||
            userData.password == ""
          )
            return;
          setIsLoggedIn(true);
        }}
      >
        LOGIN
      </button>
    </form>
  );
};

export default LogForm;

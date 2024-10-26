// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import Home from "./Home";
const initialState = {
  EmailField: "",
  passwordField: "",
};
const buttonStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "10px 20px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: 25,
  marginTop: 20,
};
const flex = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};
function App() {
  const [userInfo, setUserInfo] = useState(initialState);
  const [showUSer, setShowUser] = useState(false);

  //onchange
  const changeFunc = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  //regex

  const regEx = {
    EmailRegEx: /^(digitalAcademy@gmail.com)$/g,
    PasswordRegEx: /^(iLoveReact123)$/g,
  };
  //onsubmit
  const SubmitFunc = (event) => {
    event.preventDefault();
    const isTrue =
      userInfo.EmailField.match(regEx.EmailRegEx) &&
      regEx.PasswordRegEx.test(userInfo.passwordField);
    if (isTrue) {
      setShowUser(true);
    }
  };
  return (
    <>
      {showUSer ? (
        <Home />
      ) : (
        <div>
          <form
            style={{
              width: 250,
            }}
            onSubmit={SubmitFunc}
          >
            <div style={flex}>
              <label>Email</label>
              <input
                type="text"
                name="EmailField"
                placeholder="Enter Your Email"
                onChange={changeFunc}
              />
            </div>
            <div style={flex}>
              <label>Password</label>
              <input
                type="password"
                name="passwordField"
                placeholder="Enter Your Password"
                onChange={changeFunc}
              />
            </div>
            <div>
              <button style={buttonStyle}>Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default App;

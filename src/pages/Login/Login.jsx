import "./Login.css";

import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";

const Login = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) {
      hasInputAlreadyTouched.current = true;
    }

    if (!nameValue) {
      setNameError("Empty-name.");
    } else if (/[^a-z]/i.test(nameValue)) {
      setNameError("Just letters. No spaces.");
    } else if (!/^[a-z]{2,} ?$/.test(nameValue)) {
      setNameError("2 or more letters.");
    } else {
      setNameError("");
    }

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) {
      onSendName(userNameValue, handleSendName);
    }
  };

  const navigate = useNavigate();
  const { saveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate("/pokedex");
  };

  return (
    <div className="login__container pokeball__container">
      <div>
        <h1>PokedeX</h1>
        <p>
          <b>Welcome Trainer!</b>
        </p>
        <p>To start, please, give me your name.</p>
      </div>

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="your trainer name"
            onChange={handleChange}
          />
          {Boolean(nameError) && (
            <div className="error__container">
              <span>{nameError}</span>
            </div>
          )}
          <button type="submit">Start</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

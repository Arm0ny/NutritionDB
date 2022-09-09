/* eslint-disable no-unused-vars */
import React from "react";
import "./Register.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [uuid, setUUID] = useState("");
  const [errMsg, setErr] = useState("");
  const [validName, setValidName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === confirmPassword;
    setValidConfirm(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErr("");
  }, [username, password, confirmPassword]);

  async function handleClick() {
    setUUID(uuidv4());
    const response = await Axios.post("http://localhost:3005/register", {
      username,
      email,
      password,
      uuid,
    });
    if(response.data.status === 'OK'){
      navigate('/login')
    }else{
      setErr('Server responded with an error')
      console.log(response.data)
    }
  }

  return (
    <div className="register">
      <p className={errMsg ? "register__error" : "register__error--hidden"}>
        {errMsg}
      </p>
      <div>
        <label htmlFor="username"> username:</label>
        <input
          type="text"
          id="username"
          placeholder="your nickname"
          autoComplete="off"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <p
          className={
            username && !validName
              ? "register__rules"
              : "register__rules--hidden"
          }
        >
          username Must contain 4 to 48 characters, Must begin with a Letter,
          Letters, Numbers, hyphens, underscore allowed
        </p>
      </div>

      <div>
        <label htmlFor="email"> email address:</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.net"
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password"> password :</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          className={
            password && !validPassword
              ? "register__rules"
              : "register__rules--hidden"
          }
        >
          Password Must be between 8 and 16 characters, Must contain at least 1
          uppercase letter, 1 lowercase letter, one number and one special
          character
        </p>
      </div>

      <div>
        <label htmlFor="confirm-password"> confirm password:</label>
        <input
          type="password"
          id="confirm-password"
          autoComplete="off"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p
          className={
            confirmPassword && !validConfirm
              ? "register__rules"
              : "register__rules--hidden"
          }
        >
          Password didn't match
        </p>
      </div>

      <button
        id="submit"
        disabled={!validName || !validPassword || !validConfirm}
        onClick={handleClick}
      >
        Register!
      </button>
    </div>
  );
}
export default Register;

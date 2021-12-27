import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Error,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router-dom";
import { userDetails } from "./userFixturesData";


export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useHistory();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Invalid credentials");
    } else {
      const refObj = {
        email: email,
        password: password,
      };
      let arr = [...userDetails];
      function match(arr, ref) {
        return arr.filter(function (cur) {
          return Object.keys(ref).every(function (key) {
            return ref[key] === cur[key];
          });
        });
      }

      let result = match(arr, refObj).length;
      if (result === 0) {
        setError("Invalid credentials");
      } else {
        localStorage.setItem("isAuthenticated", "true");
        navigate.push("/dashboard");
      }
    }
  };
  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onHandlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onHandleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onHandlePasswordChange}
        />
        <Marginer direction="vertical" margin={1} />
        <Error>{error}</Error>
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

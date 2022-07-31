import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Logo } from "../../components/sidebar/sidebar";
import Top from '../../components/top/top.jsx'

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Logo onClick={() => navigate("/")}>
        <img src={require("../../assets/icons/logo.png")} alt="logo" />
        <p>shopee.</p>
      </Logo>
      {/* <Top /> */}
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignInAndSignUpPage;

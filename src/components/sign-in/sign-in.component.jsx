import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { useNavigate } from "react-router-dom";


import './sign-in.styles.scss';
import {auth} from '../../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const SignIn = () => {

  const navigate = useNavigate();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {navigate('/')});
  }

  return(
    <div className="sign-in">
      <h1 className="title">I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form >
        <FormInput
          name="email"
          type="email"
          handleChange
          value=""
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value =""
          handleChange
          label="Password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
        <CustomButton onClick={signInWithGoogle} type="submit">
          Sign in with google
        </CustomButton>
      </form>
    </div>
  );
}
export default SignIn;

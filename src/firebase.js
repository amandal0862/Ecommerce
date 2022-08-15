import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-RTcajDUpvp89J1Wk4O0IsnxPwfiH9tU",
    authDomain: "ecommerce-9216b.firebaseapp.com",
    projectId: "ecommerce-9216b",
    storageBucket: "ecommerce-9216b.appspot.com",
    messagingSenderId: "126855296282",
    appId: "1:126855296282:web:3263050c9de09f4112e8a3"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export {auth}
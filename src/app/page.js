"use client";

import XIcon from "./assets/x.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import CreateAccount from "./CreateAccount/page"
import LoginAccount from "./LoginAccount/page"
import { auth, provider } from './Firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Home() {

  const [createAccount, setCreateAccount] = useState(false)
  const [login, setLogin] = useState(false)

  const handleCreateAccountButton = () => {
    setCreateAccount(true)
  }

  const handleGoogleButton = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
        window.location.href = "/Home";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  return (
    <>
      <div className={`h-screen w-screen flex justify-center items-center flex-wrap mx-auto overflow-x-hidden`}>
        <div className="w-full lg:w-1/2 flex justify-center">
          <XIcon className="lg:w-[279px] w-[40px]" style={{ fill: "white" }} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <div className="mb-8">
            <h1 className="text-5xl text-wrap md:text-7xl font-extrabold font-custom text-gray-200 my-12">
              Happening now
            </h1>
            <p className="text-2xl font-extrabold tracking-wide font-custom text-gray-200">
              Join today.
            </p>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex rounded-3xl bg-white text-black w-full items-center justify-center h-[44px] gap-4 cursor-pointer mb-3" onClick={handleGoogleButton}>
              <FcGoogle />
              <p className="font-custom font-semibold text-sm lg:text-sm">
                Sign up with Google
              </p>
            </div>
            <div className="flex rounded-3xl bg-white text-black w-full items-center justify-center h-[38px] gap-4 cursor-pointer">
              <FaApple />
              <p className="font-custom font-semibold text-sm lg:text-sm">
                Sign up with Apple
              </p>
            </div>
            <div className="flex my-1 p-2 justify-center items-center gap-4">
              <div className="w-full h-[1px] bg-gray-600"></div>
              <p>or</p>
              <div className="w-full h-[1px] bg-gray-600"></div>
            </div>
            <div onClick={handleCreateAccountButton}>
              <div
                className="flex rounded-3xl text-black w-full items-center justify-center h-[38px] gap-4 cursor-pointer mb-3"
                style={{ backgroundColor: "#1D9BF0" }}
              >
                <p className="font-custom font-semibold text-sm lg:text-sm text-white tracking-wide">
                  Create account
                </p>
              </div>
              <p
                className="text-[11px]"
                style={{ color: "rgb(113, 118, 123)" }}
              >
                By signing up, you agree to the{" "}
                <span style={{ color: "#1D9BF0" }} className="cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span style={{ color: "#1D9BF0" }} className="cursor-pointer">
                  Privacy Policy
                </span>
                , including{" "}
                <span style={{ color: "#1D9BF0" }} className="cursor-pointer">
                  Cookie Use.
                </span>
              </p>
            </div>
            <div className="mt-10 mb-3">
              <p className="font-semibold mb-5">Already have an account?</p>
              <div className="flex rounded-3xl bg-black w-full items-center justify-center h-[38px] gap-4 cursor-pointer border-[1px]" style={{ borderColor: "rgb(83, 100, 113)"}} onClick={() => setLogin(true)}>
              <p className="font-custom font-extrabold text-sm lg:text-sm text-white" style={{ color: "#1D9BF0"}}>
                Sign in
              </p>
            </div>
            </div>
          </div>
        </div>
        { createAccount && (
          <CreateAccount setCreateAccount={setCreateAccount} XIcon={XIcon}/>
        ) }
        { login && (
          <LoginAccount setLogin={setLogin} XIcon={XIcon} />
        )}
      </div>
    </>
  );
}

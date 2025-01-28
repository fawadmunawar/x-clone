import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../Firebase/firebase'
import { useRouter } from 'next/router';
import { useState } from 'react';

const page = ({ setLogin, XIcon }) => {
  // const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleCrossBtn = () => {
        setLogin(false)
    }

    const handleSignInButton = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("Login Successful")

          window.location.href = "/Home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Firebase error: ", errorCode, errorMessage);
        });
    };

    const handleGoogleButton = () => {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user)

          window.location.href = "/Home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };


  return (
    <div
      className={`absolute md:w-[600px] md:h-[578px] w-full h-full bg-black/95 sm:px-9 rounded-xl overflow-x-hidden`}
    >
      <div className="cursor-pointer absolute hover:bg-gray-700 hover:rounded-full p-2 box-border">
        <RxCross2 className="text-xl font-bold" onClick={handleCrossBtn} />
      </div>
      <div className="flex justify-center">
        <XIcon className="w-[28px] h-[26px]" style={{ fill: "white" }} />
      </div>
      <div className="flex flex-col px-20 justify-start">
        <div className="py-5">
          <h1 className="text-3xl font-semibold">Sign in to X</h1>
        </div>
        <div>
          <div className="py-3" onClick={handleGoogleButton}>
            <div className="flex rounded-3xl bg-white text-black w-full items-center justify-center h-[44px] gap-4 cursor-pointer mb-3">
              <FcGoogle />
              <p className="font-custom font-semibold text-[12px] md:text-sm">
                Sign up with Google
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-1 p-2 justify-center items-center gap-4">
          <div className="w-full h-[1px] bg-gray-600"></div>
          <p>or</p>
          <div className="w-full h-[1px] bg-gray-600"></div>
        </div>
        <div className="mt-5">
            <input type="text" placeholder='Email' className='py-4 w-full bg-transparent border px-2 outline-blue-600 border-gray-500 b rounded-md' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mt-5">
            <input type="password" placeholder='Password' className='py-4 w-full bg-transparent border px-2 outline-blue-600 border-gray-500 b rounded-md' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="py-3 mt-6">
            <div className="flex rounded-3xl bg-white text-black w-full items-center justify-center h-[38px] gap-4 cursor-pointer"
              onClick={handleSignInButton}>
              <p className="font-custom font-semibold text-[12px] md:text-sm">
                Next
              </p>
            </div>
          </div>
          <div className="py-3">
            <div className="flex rounded-3xl bg-black w-full items-center justify-center h-[38px] gap-4 cursor-pointer border-[1px]" style={{ borderColor: "rgb(83, 100, 113)"}}>
              <p className="font-custom font-semibold text-[12px] md:text-sm" style={{ color: "#1D9BF0"}} >
                Forgot Password?
              </p>
            </div>
          </div>
        <div className="py-6 flex justify-start items-center w-full">
          <p className='text-sm'>Dont have an account? <span className='cursor-pointer hover:border-b border-blue-500' style={{ color: "#1D9BF0"}}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default page
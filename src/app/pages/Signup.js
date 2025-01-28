import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import Link from "next/link";

const Signup = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login successfull")
        setError(false)
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="mx-auto box-border">
      <form
        onSubmit={handleLogin}
        className="flex flex-col p-6 gap-6 bg-yellow-100 rounded-lg items-center"
      >
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-300 p-2 rounded-lg"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-300 p-2 rounded-lg"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-gray-200 p-4">Login</button>
        {error && (
          <span className="text-red-700">*wrong email or password</span>
        )}
        <p>Dont have an account?</p>
        <Link href="/Login">
          <button className="bg-gray-200 px-4 py-2">Click Here</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

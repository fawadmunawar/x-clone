// "use client"

// import Link from "next/link";
// import { auth } from "../Firebase/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";

// export default function Login() {

//     const [error, setError] = useState(false)
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//   const handleClick = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("account created successfully")
//         setError(false)
//       })
//       .catch((error) => {
//         setError(true)
//       });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center flex-col">
//       <h1>This is login page</h1>
//       <form className="flex flex-col p-6 gap-6 bg-yellow-100 rounded-lg items-center"
//         onSubmit={handleClick}
//       >
//         <input
//           type="text"
//           placeholder="Email"
//           className="bg-gray-300 p-2 rounded-lg"
//           onChange={(e) => setEmail(e.target.value)}
//           />
//         <input
//           type="password"
//           placeholder="Password"
//           className="bg-gray-300 p-2 rounded-lg"
//           onChange={(e) => setPassword(e.target.value)}
//           />
//         <button type="submit" className="bg-gray-200 p-4">
//           Login
//         </button>
//         {error && (
//             <span className="text-red-700">*Enter valid email & password</span>
//         )}
//         <p>Have an account?</p>
//         <Link href="/">
//           <button className="bg-gray-200 px-4 py-2">Click Here</button>
//         </Link>
//       </form>
//     </div>
//   );
// }

"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { auth, provider, signInWithPopup } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const page = ({ setCreateAccount, XIcon }) => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleCrossBtn = () => {
        setCreateAccount(false)
    }

    const handleCreateAccountButton = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("account created successfully")
            window.location.href = "/";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Firebase error: ", errorCode, errorMessage);
          });
    };
  return (
    <div className={`absolute md:w-[600px] md:h-[578px] w-full h-full bg-black/95 p-3 sm:px-9 rounded-xl overflow-x-hidden`}>
        <div className='cursor-pointer absolute hover:bg-gray-700 hover:rounded-full p-2 box-border'>
            <RxCross2 className="text-xl font-bold" onClick={handleCrossBtn}/>
        </div>
        <div className='flex justify-center'>
            <XIcon className="w-[28px] h-[26px]" style={{ fill: "white" }} />
        </div>
        <div className='flex flex-col px-20 justify-start'>
            <div className='py-5'>
                <h1 className='text-xl md:text-3xl font-semibold'>Create your account</h1>
            </div>
            <div>
                <div className='py-3'>
                    <input type="text" placeholder='Email' className='py-4 w-full bg-transparent border px-2 outline-blue-600 border-gray-500 b rounded-md' onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className='py-3'>
                    <input type="password" placeholder='Password' className='py-4 w-full bg-transparent border px-2 outline-blue-600 border-gray-500 b rounded-md' onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='mt-5'>
                <p className='mb-2'>Date of birth</p>
                <p className='mb-1 text-sm text-gray-500'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            </div>
            <div className='py-4 flex justify-start items-center gap-6 flex-wrap'>
                <div className='flex flex-col w-1/2 border border-gray-500 p-2 rounded-md'>
                    <label htmlFor="month" className='text-sm text-gray-400'>Month</label>
                    <select name="month" id="month" className='bg-black text-white'>
                        <option value=""></option>
                        <option value="Jan">January</option>
                        <option value="Jan">February</option>
                        <option value="Jan">March</option>
                        <option value="Jan">April</option>
                        <option value="Jan">May</option>
                        <option value="Jan">June</option>
                        <option value="Jan">July</option>
                        <option value="Jan">August</option>
                        <option value="Jan">September</option>
                        <option value="Jan">October</option>
                        <option value="Jan">November</option>
                        <option value="Jan">December</option>
                    </select>
                </div>
                <div className='flex flex-col border border-gray-500 p-2 rounded-md w-1/4'>
                    <label htmlFor="day" className='text-sm text-gray-400'>Day</label>
                    <select name="day" id="day" className='bg-black'>
                        <option value=""></option>
                        <option value="Jan">1</option>
                        <option value="Jan">2</option>
                        <option value="Jan">3</option>
                        <option value="Jan">4</option>
                        <option value="Jan">5</option>
                        <option value="Jan">6</option>
                        <option value="Jan">7</option>
                        <option value="Jan">8</option>
                        <option value="Jan">9</option>
                        <option value="Jan">10</option>
                        <option value="Jan">11</option>
                        <option value="Jan">12</option>
                        <option value="Jan">13</option>
                        <option value="Jan">14</option>
                        <option value="Jan">15</option>
                        <option value="Jan">16</option>
                        <option value="Jan">17</option>
                        <option value="Jan">18</option>
                        <option value="Jan">19</option>
                        <option value="Jan">20</option>
                        <option value="Jan">21</option>
                        <option value="Jan">22</option>
                        <option value="Jan">23</option>
                        <option value="Jan">24</option>
                        <option value="Jan">25</option>
                        <option value="Jan">26</option>
                        <option value="Jan">27</option>
                        <option value="Jan">28</option>
                        <option value="Jan">29</option>
                        <option value="Jan">30</option>
                    </select>
                </div>
                <div className='flex flex-col border border-gray-500 p-2 rounded-md'>
                    <label htmlFor="year" className='text-sm text-gray-400'>Year</label>
                    <select name="year" id="year" className='bg-black'>
                        <option value=""></option>
                        <option value="Jan">2024</option>
                        <option value="Jan">2034</option>
                        <option value="Jan">2022</option>
                        <option value="Jan">2021</option>
                        <option value="Jan">2020</option>
                        <option value="Jan">2019</option>
                        <option value="Jan">2018</option>
                        <option value="Jan">2017</option>
                        <option value="Jan">2016</option>
                        <option value="Jan">2015</option>
                        <option value="Jan">2015</option>
                        <option value="Jan">2014</option>
                    </select>
                </div>
            </div>
            <div className='py-6 flex justify-start items-center w-full'>
                <button className='p-4 bg-white font-bold rounded-3xl text-black w-full' onClick={handleCreateAccountButton}>Create Account</button>
            </div>
        </div>
    </div>
  )
}

export default page
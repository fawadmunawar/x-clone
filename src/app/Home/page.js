"use client";

import React from "react";
import XIcon from "../assets/x.svg";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiCompass4Line } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import mypic from "../assets/mypic.jpg";
import Image from "next/image";
import { IoEarthSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { LuBarChart2 } from "react-icons/lu";
import { useState, useEffect } from "react";
import {storage} from "../Firebase/firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"

const page = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [hamIcon, setHamIcon] = useState(false);


  const imageListRef = ref(storage, "images/")

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + "@4ch"}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    })
  };

  const handleHamBurger = () => {
    setHamIcon((prev) => !prev)
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [])
  

  return (
    <div className="flex bg-gray-900 text-white h-screen overflow-x-hidden font-custom flex-wrap">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-black px-4 border-r border-gray-700 box-border  lg:flex flex-col items-center">
          <XIcon className="hidden lg:flex lg:w-[28px] lg:h-[26px] lg:ml-3" style={{ fill: "white" }} />
          {/* <GiHamburgerMenu className="lg:hidden w-6 h-6 ml-1" onClick={handleHamBurger}/> */}
          {hamIcon ? (<RxCross2 className="lg:hidden text-2xl font-bold" onClick={handleHamBurger}/>) : (<GiHamburgerMenu className="lg:hidden w-6 h-6" onClick={handleHamBurger} />)}
          {hamIcon && (
            <div className="w-1/5 bg-black box-border flex flex-col items-start gap-6 mt-4 z-50 text-sm sm:text-lg transition">
                {/* <div><a href="">Home</a></div>
                <div><a href="">Explore</a></div>
                <div><a href="">Notifications</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">Grok</a></div>
                <div><a href="">Communities</a></div>
                <div><a href="">Profile</a></div>
                <div><a href="">More</a></div>
                <div><a href="">Post</a></div> */}
                <div><GoHomeFill className="w-6 h-6" /></div>
                <div><IoSearchOutline className="w-6 h-6" /></div>
                <div><RiNotification2Line className="w-6 h-6" /></div>
                <div><FaRegEnvelope className="w-6 h-6" /></div>
                <div><RiCompass4Line className="w-6 h-6" /></div>
                <div><IoPeopleOutline className="w-6 h-6" /></div>
                <div><FaRegUser className="w-6 h-6" /></div>
                <div><CgMoreO className="w-6 h-6" /></div>
                <div></div>
            </div>
          )}
        <div className="hidden lg:flex flex-col p-4">
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl relative">
            <GoHomeFill className="w-6 h-6" />
            <a href="#" className="text-xl font-bold">
              Home
            </a>
            <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-2.5 left-7"></div>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <IoSearchOutline className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Explore
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <RiNotification2Line className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Notifications
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <FaRegEnvelope className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Messages
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <RiCompass4Line className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Grok
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <IoPeopleOutline className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Communities
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <FaRegUser className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              Profile
            </a>
          </div>
          <div className="flex gap-4 items-center p-3 hover:bg-gray-900 hover:rounded-3xl">
            <CgMoreO className="w-6 h-6" />
            <a href="#" className="text-xl font-extralight">
              More
            </a>
          </div>
          <button className="bg-blue-500 text-white py-3 px-4 rounded-3xl mt-4 font-bold hover:bg-blue-600 transition duration-100">
            Post
          </button>
        </div>
        <div className="mt-6 hidden lg:flex items-center rounded-[50px] hover:bg-white/10 transition duration-300 p-3">
          <div className="h-[40px] w-[40px] rounded-full mr-4">
            {/* <img src={mypic} alt="" /> */}
            <Image
              src={mypic}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">Fawad Munawar</p>
            <p className="text-gray-600">@fawadmunawar</p>
          </div>
          <div className="ml-4">
            <p className="text-lg">...</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 lg:w-3/5 bg-black font-custom">
        <div className="flex items-center justify-center border-b border-gray-700">
          <div className="flex items-center justify-center w-1/2 p-4">
            <p className=" cursor-pointer border-b-4 rounded-sm border-blue-700 ">
              For you
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2 p-4">
            <p className="text-gray-500 cursor-pointer">Following</p>
          </div>
        </div>
        <div className="flex p-4 border-b border-gray-700">
          <div className="h-[40px] w-[40px] rounded-full mr-4">
            {/* <img src={mypic} alt="" /> */}
            <Image
              src={mypic}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              className="bg-transparent outline-none p-4 text-xl"
              placeholder="What is happening?!"
            />
            <div className="border-b border-gray-700 flex items-center gap-2 pb-4">
              <IoEarthSharp fill="#1D9BF0" />
              <p className="text-[#1D9BF0]">Everyone can reply.</p>
            </div>
            <div className="flex mt-2 pb-4 justify-between items-center flex-wrap">
              <div className="flex items-center gap-4 flex-wrap">
                <CiImageOn fill="#1D9BF0" className="w-5 h-5 cursor-pointer" />
                <input
                  type="file"
                  name="media"
                  id="media"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <AiOutlineFileGif
                  fill="#1D9BF0"
                  className="w-5 h-5 cursor-pointer"
                />
                <BiPoll fill="#1D9BF0" className="w-5 h-5 cursor-pointer" />
                <FaRegSmile fill="#1D9BF0" className="w-5 h-5 cursor-pointer" />
                <RiCalendarScheduleLine
                  fill="#1D9BF0"
                  className="w-5 h-5 cursor-pointer"
                />
                <MdOutlineLocationOn
                  fill="#1D9BF0"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded-lg mt-2"
                onClick={uploadImage}
              >
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-4">
          <div className="bg-black p-4 rounded-2xl mb-4 border border-gray-700">
            <h3 className="font-bold text-lg">Earn on X</h3>
            <p className="text-sm">
              If eligible, you can receive a share of ad revenue just by posting
              on X.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-[50px] mt-2 text-sm">
              Subscribe today
            </button>
          </div>
        </div>
        <div>
          {imageList.map((url) => {
            return (
              <div className="mt-10 p-6 bg-black border-t-gray-700 border-t">
                <div className="flex items-center mb-4">
                  <Image
                    src={mypic}
                    alt="profile pic of the user"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">Fawad Munawar</div>
                    <div className="text-gray-500">@fawadmunawar</div>
                  </div>
                  <div className="ml-auto text-gray-500">Oct 21</div>
                </div>
                <div className="tweet-content mx-6 flex flex-col items-center">
                  <img
                    src={url}
                    alt=""
                    className="w-96 rounded-lg mt-4 "
                  />
                  <div className="flex justify-around w-full mt-8 text-gray-500">
                    <div className="flex items-center cursor-pointer">
                      <FaRegComment className="mr-2" />
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <AiOutlineRetweet className="mr-2" />
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <IoMdHeartEmpty className="mr-2" />
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <LuBarChart2 className="mr-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-1/5 lg:p-4 lg:bg-black lg:border-l lg:border-gray-700">
        <div className="mt-6">
          <div className="bg-black p-4 rounded-2xl mb-4 border border-gray-700">
            <h3 className="font-bold text-lg">Earn on X</h3>
            <p className="text-sm">
              If eligible, you can receive a share of ad revenue just by posting
              on X.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-[50px] mt-2 text-sm">
              Subscribe today
            </button>
          </div>
        </div>

        <div className="border border-gray-700 p-2 rounded-2xl flex flex-col">
          <h3 className="font-bold">Trends for you</h3>
          <div className="mt-4 space-y-2 overflow-x-hidden">
            <div className="bg-black p-2 rounded-lg">
              <p className="text-sm text-gray-600">Technology Trending</p>
              <p className="font-bold">Face Id</p>
              <p className="text-sm text-gray-400">562K posts</p>
            </div>
            <div className="bg-black p-2 rounded-lg">
              <p className="font-bold">Mustafa</p>
              <p className="text-sm text-gray-400">69.6K posts</p>
            </div>
            <div className="bg-black p-2 rounded-lg">
              <p className="font-bold">#PakistanUnderMilitaryFascism</p>
              <p className="text-sm text-gray-400">1,493 posts</p>
            </div>
            <div className="bg-black p-2 rounded-lg">
              <p className="font-bold">Sophie Rain</p>
              <p className="text-sm text-gray-400">9,465 posts</p>
            </div>
            <div className="mt-4 px-2">
              <button className="text-blue-500 text-sm">Show more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

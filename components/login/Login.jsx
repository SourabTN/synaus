import React from "react";
import ImageContainer from "../layout/ImageContainer";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { IoLogoSkype } from "react-icons/io";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="h-screen flex justify-center flex-col xl:flex-row bg-white">
        <div className="flex-1 bg-gradient-to-tl from-primary to-primary-light">
          <ImageContainer
            imgSrc="/login/Saly-1.svg"
            height={"h-full"}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex-1 bg-white py-5 xl:py-24">
          <div className="px-5 xl:px-24">
            <IoLogoSkype size={60} className="text-primary" />
            <h2 className="font-poppins font-semibold pb-1 pt-4">Login</h2>
            <h6 className="font-poppins text-font">
              It’s not long before you embark on this journey!
            </h6>
          </div>
          <div className="w-full md:w-4/5 px-5 xl:px-24 pt-5 font-poppins">
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                E-mail
              </label>
              <MdOutlineAlternateEmail className="pointer-events-none w-6 h-6 absolute top-[50px] right-3 transform -translate-y-1/2 text-gray-400" />

              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="jonh.doe@gmail.com"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <FiLock className="pointer-events-none w-6 h-6 absolute top-[49px] mt-0.5 right-3 transform -translate-y-1/2 text-gray-400" />
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**********"
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-top mb-6 justify-top items-top">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className={
                  "w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-0 border-transparent focus:border-transparent cursor-pointer"
                }
              />

              <label
                htmlFor="default-checkbox"
                className={"text-sm ml-2 text-gray-600"}
              >
                {"I've read and agree with "}
                <span
                  className={"font-bold cursor-pointer"}
                  // onClick={() => router.push("/privacy-policy")}
                >
                  {"Terms od Service"}
                </span>
                {" and our "}
                <span
                  className={"font-bold cursor-pointer"}
                  // onClick={() => router.push("/privacy-policy")}
                >
                  {"Privacy Policy."}
                </span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-tl from-primary to-primary-light text-white py-2 px-8 rounded focus:outline-none focus:shadow-outline hover:shadow-xl hover:shadow-primary-dark/50 transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-105 cursor-pointer text-center"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline text-sm font-semibold text-primary hover:text-primary-dark"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="block text-gray-700 text-sm font-bold mt-10 text-center">
              {"Don’t have an account? "}
              <Link href="/signup">
                <span
                  className={
                    "font-bold cursor-pointer text-primary hover:underline"
                  }
                  //   onClick={() => router.push("/signup")}
                >
                  {"Sign Up Now."}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

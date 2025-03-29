import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

const CreatePassword = () => {
  const [userPassword, setuserPassword] = useState([
    {
      website: "",
      username: "",
      password: "",
      // imageId:""
    },
  ]);

  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const imageRef = useRef();
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const handleOnChange = (e) => {
    setuserPassword({ ...userPassword, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const storedPassword =
      JSON.parse(localStorage.getItem("userPasswords")) || [];
    storedPassword.push({ ...userPassword });
    localStorage.setItem("userPasswords", JSON.stringify(storedPassword));
    setloader(true);
    setTimeout(() => {
      setloader(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {userdata ? (
        <div className="h-screen w-full bg-[#FFCB47] overflow-hidden">
          <div className="h-[20vh] w-full  px-4 py-4 ">
            <div className="flex items-center gap-5">
              <i
                onClick={() => {
                  navigate("/");
                }}
                className="ri-arrow-left-line text-2xl active:scale-[1.5]"
              ></i>
              <h4>Back</h4>
            </div>
            <h1 className="text-3xl font-semibold text-center mt-5">
              Store Your Password
            </h1>
            <p className="text-sm font-semibold text-center">
              Welcome to Password manager to store your password
            </p>
          </div>
          <div className="crtprt-center relative px-4 py-6 flex w-full items-start mt-24 h-[77vh] rounded-t-4xl  bg-white">
            <form
              onSubmit={handleOnSubmit}
              action=""
              className="flex items-start flex-col w-full mt-12"
            >
              <h4 className="absolute top-6 left-[35%] w-full text-xl font-semibold ">
                Get Started
              </h4>
              <input
                ref={imageRef}
                required
                minLength={4}
                maxLength={16}
                onChange={handleOnChange}
                value={userPassword.website}
                name="website"
                className="outline-none  border-[1.5px] border-gray-900 mb-3 w-full py-4 px-3 rounded-xl placeholder:text-sm"
                placeholder="Enter Your Website ? App Name"
                type="text"
              />
              <input
                required
                minLength={4}
                maxLength={16}
                onChange={handleOnChange}
                value={userPassword.username}
                name="username"
                className="outline-none  border-[1.5px] border-gray-900 mb-3 w-full py-4 px-3 rounded-xl placeholder:text-sm"
                placeholder="Enter Your Username, Email, userid"
                type="text"
              />
              <input
                required
                minLength={4}
                maxLength={16}
                onChange={handleOnChange}
                value={userPassword.password}
                name="password"
                className="outline-none  border-[1.5px] border-gray-900 mb-3 w-full py-4 px-3 rounded-xl placeholder:text-sm"
                placeholder="Enter Your Password"
                type="password"
              />
              <button
                type="submit"
                className="text-lg bg-[#FFCB47] w-full py-3 rounded-xl mt-2"
              >
                {loader ? (
                  <div className="flex justify-center gap-2 items-center">
                    <div className="h-6 w-6 animate-spin inline-block border-t-transparent rounded-full border-gray-700 border-[3px]"></div>
                    Loading
                  </div>
                ) : (
                  "Create"
                )}
              </button>
              <></>
            </form>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default CreatePassword;

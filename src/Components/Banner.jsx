import React from "react";

const Banner = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="py-2 px-4">
      {/* <marquee className='mb-12 text-2xl mx-2 font-["Courier New"] uppercase bg-yellow-400 rounded-2xl  '>Welcome User to My APP</marquee> */}
      <div className="h-[140px] w-full bg-[#4475DC] rounded-2xl mt-10 relative">
        <img
          className="h-[80px] w-[80px] rounded-full absolute top-[-30%] left-5 "
          src="https://i.pinimg.com/736x/3b/0c/b8/3b0cb8d8d089a8b7776a9559babf4c85.jpg"
          alt=""
        />
        {userdata ? (
          <h1 className="text-xl text-left absolute top-11 left-2 text-white">
            {userdata.name}{" "}
          </h1>
        ) : (
          <h1 className="text-xl text-left absolute top-11 left-2 text-white">
            {" "}
            Please Login ?{" "}
          </h1>
        )}
        {userdata ? (
          <h2 className="text-lg text-left absolute top-18 left-2 text-gray-200">
            {userdata.email}
          </h2>
        ) : (
          <h2 className="text-lg text-left absolute top-18 left-2 text-gray-200">
            Please Login ?
          </h2>
        )}
        {userdata ? (
          <h2 className="text-lg text-left absolute top-25 left-2 text-slate-100">
            Total Posts : 12
          </h2>
        ) : (
          <h2 className="text-lg text-left absolute top-25 left-2 text-slate-100">
            Please login ?
          </h2>
        )}
        <i className="ri-pencil-fill absolute right-4 top-3 text-3xl text-gray-100 bg-amber-400 h-[60px] w-[60px] flex items-center justify-center rounded-full"></i>
      </div>
    </div>
  );
};

export default Banner;

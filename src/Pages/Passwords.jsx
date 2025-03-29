import React, { useState, useEffect } from "react";

const Passwords = () => {
  const [userPasswords, setUserPasswords] = useState([]);

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem("userPasswords")) || [];
    setUserPasswords(storedPasswords);
  }, []);

  return (
    <div className="w-full px-4 py-2">
      <h1 className="text-xl text-center mt-4">Recently Added Passwords</h1>

      <div className="flex items-center mt-10 flex-col gap-2 relative">
        {userPasswords.length === 0 ? (
          <p className="text-gray-500">No passwords available</p>
        ) : (
          userPasswords.map((elem, id) => (
            <div
              key={id}
              className="pass flex items-center justify-between w-full border-2 p-2 h-26 rounded-xl"
            >
              <img
                className="w-[50px]"
                src="https://i.pinimg.com/736x/94/5e/f9/945ef9aa1f1dc9559a22719a3b818e5d.jpg"
                alt="Website Logo"
              />
              <div className="px-5 w-[70%] mr-7 flex flex-col">
                <h4 className="h-auto w-full text-sm font-semibold flex flex-wrap">
                  {elem.website}
                </h4>
                <h4 className="h-auto w-full text-sm font-semibold">
                  {elem.username}
                </h4>
                <h4 className="h-auto w-full text-sm font-bold">
                  {elem.password}
                </h4>
              </div>
              <i className="ri-file-copy-line text-3xl"></i>
              <h1 className="absolute right-0 top-[-20px] text-4xl">😎</h1>
              <h1 className="absolute left-0 top-[-20px] text-4xl">🤖</h1>
            </div>
          ))
        )}

        <button
          onClick={() => {
          alert("Clear All Data")
          localStorage.clear();
          setUserPasswords([]); // Clear state as well
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Passwords;

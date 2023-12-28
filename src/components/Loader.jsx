import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen dark:bg-[#3C3C3C]">
      <div
        className="animate-spin w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

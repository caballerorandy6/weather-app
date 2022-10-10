import React from "react";

const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center font-bold p-1 mb-4 ">
      {children}
    </div>
  );
};

export default Error;

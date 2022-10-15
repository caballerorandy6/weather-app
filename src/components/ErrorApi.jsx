import React from "react";

const ErrorApi = ({ children }) => {
  return (
    <div className="mx-auto w-10/12 md:w-5/12  bg-red-700 text-white p-2 mb-4 font-bold text-center">
      {children}
    </div>
  );
};

export default ErrorApi;

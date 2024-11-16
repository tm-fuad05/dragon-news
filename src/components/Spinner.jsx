import React from "react";
import { PuffLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="loading loading-dots text-red-400 loading-lg"></span>
    </div>
  );
};

export default Spinner;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
const SignleDetails = () => {
  const { data } = useLoaderData();
  const { image_url, title, details } = data[0];

  return (
    <div>
      <h2 className="font-semibold ">Dragon News</h2>
      <div className="border border-gray-200 p-4 space-y-4 mt-3 mb-10">
        <figure>
          <img className="w-full h-full" src={image_url} alt="" />
        </figure>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm">{details}</p>

        <div>
          <Link
            to="/category/01"
            className=" btn w-fit btn-sm rounded-none bg-[#D72050] text-white flex items-center gap-2"
          >
            <GoArrowLeft className="text-lg" />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignleDetails;

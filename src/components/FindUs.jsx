import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-blue-600"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-orange-700"></FaInstagram> Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
      </div>
    </div>
  );
};

export default FindUs;

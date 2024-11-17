import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser, user, setUser, resetPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    setError("");
    signInUser(email, pass)
      .then((result) => {
        setUser(result.user);
        navigate("/category/01");
      })
      .catch(() => setError("Invalid email or password"));
  };
  const handleResetPass = () => {
    resetPass(emailRef.current.value)
      .then(() => {
        alert("Passeord reset email sent!");
      })
      .catch(() => {
        setError("Email missing. At first input an email");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-8">
        <h2 className="text-center font-bold text-2xl mt-5">
          Login your account
        </h2>
        <hr className="w-11/12 mx-auto mt-4 text-neutral" />
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              ref={emailRef}
              name="email"
              className="input  rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input rounded-none   bg-[#F3F3F3]"
              required
            />
            <button
              onClick={() => setShow(!show)}
              className="absolute right-4 top-12 hover:opacity-50"
            >
              {show ? (
                <FaEye className="text-neutral text-lg" />
              ) : (
                <FaEyeSlash className="text-neutral text-lg" />
              )}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <label className="label">
              <button
                onClick={handleResetPass}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  btn-neutral rounded-md">Login</button>
            <p className="text-[#706F6F] font-semibold mt-5 text-center">
              Dont’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-[#FF8C47] hover:underline"
              >
                Register
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

      <ToastContainer />
    </div>
  );
};

export default Login;

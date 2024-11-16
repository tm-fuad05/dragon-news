import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInUser, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    setError("");
    signInUser(email, pass)
      .then((result) => {
        setUser(result.user);
        navigate("/category/01");
      })
      .catch(() => setError("Invalid email or password"));
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
              name="email"
              className="input  rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input rounded-none   bg-[#F3F3F3]"
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
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

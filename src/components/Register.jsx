import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, user, profile, updateUserProfile } =
    useContext(AuthContext);
  console.log(user);
  console.log(profile);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;

    setError("");
    if (pass.length < 6) {
      setError("Password must be at least 6 character or more");
      return;
    }
    createUser(email, pass)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          console.log("Profile updated").catch(() => {
            console.log("Error");
          });
        });
      })
      .catch((error) => {
        setUser(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-8">
        <h2 className="text-center font-bold text-2xl mt-5">
          Register your account
        </h2>
        <hr className="w-11/12 mx-auto mt-4 text-neutral" />
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input  rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input  rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
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
          </div>
          {error && <p className="text-sm text-red-500"> {error}</p>}
          <div className="form-control mt-6">
            <button className="btn  btn-neutral rounded-md">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

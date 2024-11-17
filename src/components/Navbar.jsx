import { Link, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setUser();
        navigate("/auth/login");
      })
      .catch((error) => setUser(error.message));
  };
  return (
    <div className="flex justify-between items-center ">
      <div className="">{user?.displayName} </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {user && user ? (
          <div className="rounded-full w-12 h-12">
            <img
              className=" border p-0.5  w-full  h-full object-cover rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <div>
            {" "}
            <img src={userIcon} alt="" />
          </div>
        )}

        {user && user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-neutral rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            {user ? "Logout" : "Login"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

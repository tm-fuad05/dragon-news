import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateLayout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/auth/login"></Navigate>
    </div>
  );
};

export default PrivateLayout;

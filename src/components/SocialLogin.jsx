import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn, gitHubSignIn, setUser } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignInWithGitHub = () => {
    gitHubSignIn()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleSignInWithGoogle} className="btn ">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleSignInWithGitHub} className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

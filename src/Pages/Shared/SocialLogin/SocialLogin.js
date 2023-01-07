import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <p className="text-center text-orange-600 font-semibold">
        Sign In With Google
      </p>
      <div className="flex justify-center pb-4">
        <Button
          onClick={handleGoogleLogin}
          outline={true}
          gradientDuoTone="cyanToBlue"
        >
          <FcGoogle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;

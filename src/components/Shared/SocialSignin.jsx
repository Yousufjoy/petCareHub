import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SocialSignin = () => {
  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider);
  };
  return (
    <>
      <button
        onClick={() => {
          handleSocialLogin("google");
        }}
        className="btn flex items-center justify-center text-3xl"
      >
        <FcGoogle />
      </button>
    </>
  );
};

export default SocialSignin;

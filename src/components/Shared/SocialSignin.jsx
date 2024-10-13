import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Suspense } from "react";

const SocialSigninContent = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSocialLogin = async (provider) => {
    try {
      await signIn(provider, {
        redirect: true,
        callbackUrl: path ? path : "/",
      });
    } catch (error) {
      console.error("Social login error:", error);
    }
  };

  return (
    <button
      onClick={() => handleSocialLogin("google")}
      className="btn flex items-center justify-center text-3xl my-3"
    >
      <FcGoogle />
    </button>
  );
};

const SocialSignin = () => {
  return (
    <Suspense fallback={<div>Loading social login...</div>}>
      <SocialSigninContent />
    </Suspense>
  );
};

export default SocialSignin;

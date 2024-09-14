import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SocialSignin = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();

  const path = searchParams.get("redirect");
  // const session = useSession()

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };
  return (
    <>
      <button
        onClick={() => {
          handleSocialLogin("google");
        }}
        className="btn flex items-center justify-center text-3xl my-3"
      >
        <FcGoogle />
      </button>
    </>
  );
};

export default SocialSignin;

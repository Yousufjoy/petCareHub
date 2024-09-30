"use client";
import Image from "next/image";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/Shared/SocialSignin";

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect
    });

    if (resp?.ok) {
      // Check user role after successful login
      const session = await fetch("/api/auth/session").then((res) =>
        res.json()
      );
      if (session?.user?.role === "admin") {
        router.push("/admin-dashboard"); // Redirect to admin dashboard
      } else {
        router.push(path ? path : "/"); // Redirect to homepage or the intended path
      }
    } else {
      console.error("Failed to login");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-14 flex-col lg:flex-row-reverse">
        <div className="relative text-center lg:text-left lg:w-1/2">
          <Image
            src="/assets/loginDog.png"
            alt="Dog illustration"
            width={800}
            height={500}
            className="rounded-xl shadow-lg opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:pl-6 lg:pt-[220px]">
            <h1 className="text-6xl font-bold mb-4 text-gray-700 font-fanwood">
              Login now!
            </h1>
            <p className="py-6 text-gray-700 text-center lg:text-left font-fanwood text-xl">
              Welcome Back! "Reconnect with your pet’s favorite treats and
              essentials. Log in to manage your orders, track deliveries, and
              more."
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <SocialSignin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

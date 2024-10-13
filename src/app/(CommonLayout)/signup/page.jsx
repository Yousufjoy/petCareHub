"use client";
import SocialSignin from "@/components/Shared/SocialSignin";
import Image from "next/image";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Access the uploaded image from the form
    const imageFile = e.target.image.files[0];

    // Create FormData and append the image file to it
    const formData = new FormData();
    formData.append("image", imageFile);

    // Upload the image to imgbb
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    const imageUrl = data.data.display_url;

    // Create the new user object with the uploaded image URL
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image: imageUrl, // use the uploaded image URL
    };

    // Send the new user data to your API
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });

    // Handle response from the API
    if (resp.status === 200) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
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
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:pl-6  lg:pt-[220px]">
            <h1 className="text-6xl font-bold mb-4 text-gray-700 font-fanwood">
              Sign Up now!
            </h1>
            <p className="py-6 text-gray-700 text-center lg:text-left font-fanwood text-xl">
              Join the Family! Create an account to unlock personalized pet care
              tips, exclusive deals, and a seamless shopping experience tailored
              to your furry friends needs.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <SocialSignin />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

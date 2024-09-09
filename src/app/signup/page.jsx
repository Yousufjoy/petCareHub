"use client";
import Image from "next/image";

const SignUpPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image: e.target.image.value,
    };

    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
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
              Join the Family! "Create an account to unlock personalized pet
              care tips, exclusive deals, and a seamless shopping experience
              tailored to your furry friend's needs."
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
                type="url"
                id="image"
                name="image"
                className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/your-image.jpg"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

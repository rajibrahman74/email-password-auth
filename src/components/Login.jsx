import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Send a request to the backend to authenticate the user
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Log in to your account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-semibold mb-2 text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
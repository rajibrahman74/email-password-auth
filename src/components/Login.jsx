import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!/(?=.*[a-z])/.test(password)) {
      setError("Please add at least one lowercase character in your password");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase character in your password");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("Must contain at least one numeric digit.");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password.");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Log in to your account
        </h1>
        <form onSubmit={handleLogin}>
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
              required
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
              required
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        if(!loginUser.emailVerified) {
          alert("Your email is not verified");
        }
        setError("");
        setSuccess("User login has been successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Log in to your account
        </h1>
        <span className="text-red-600 font-semibold">{error}</span>
        <span className="text-green-600 font-semibold">{success}</span>
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
        <p className="text-center pt-3 text-lg">
          <small>
            New to this website? Please
            <Link className="text-blue-600" to="/register"> Register</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
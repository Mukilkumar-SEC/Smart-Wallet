// src/pages/Login.jsx
import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ThreeScene from "../components/ThreeScene";
import ParticlesBackground from "../components/ParticlesBackground";

const Login = ({ setUser }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      setErrorMsg("Google Sign-In Failed: " + err.message);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      let result;
      if (isRegistering) {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
      }
      setUser(result.user);
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <ParticlesBackground />

      <div className="absolute z-10 bg-white text-gray-900 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-10 text-center space-y-4">
        {/* Title with 3D Icons */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-12 h-12">
            <ThreeScene />
          </div>
          <h1 className="text-3xl font-bold text-black">SafePass Wallet</h1>
          <div className="w-12 h-12">
            <ThreeScene />
          </div>
        </div>

        <p className="text-gray-600">Secure. Gasless. Easy to Use.</p>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition duration-200"
          >
            {isRegistering ? "Create Account" : "Login with Email"}
          </button>
        </form>

        <div className="text-gray-500 my-2">— OR —</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition duration-200"
          >
          Sign in with Google
        </button>

        <p className="text-sm text-gray-600 mt-2">
          {isRegistering ? "Already have an account?" : "Don’t have an account?"}{"..."}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-black hover:underline bg-transparent border-none focus:outline-none p-1"
          >
            {isRegistering ? "Login here" : "Register here"}
          </button>
        </p>

        {errorMsg && (
          <p className="text-red-600 text-sm font-semibold">{errorMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Login;

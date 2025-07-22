import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = ({ user = {} }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🔵 Particle Background */}
      <ParticlesBackground />

      {/* 🔵 Foreground Content */}
      <div className="absolute inset-0 flex flex-col">
        {/* 🔹 Navbar */}
        <div className="flex justify-between items-center px-6 py-4 bg-white bg-opacity-90 text-gray-900 shadow-md z-10">
          <h1 className="text-xl font-bold">SafePass Wallet</h1>
          <button
            onClick={() => signOut(auth)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Logout
          </button>
        </div>

        {/* 🔹 Main Content */}
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-10 text-center space-y-6 z-10">
            <h2 className="text-2xl font-bold text-black">
              Welcome, {user?.displayName || 'User'} 👋
            </h2>

            <p className="text-sm text-gray-600">
              Wallet ID:{' '}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                {user?.uid?.slice(0, 10) || '1234567890'}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/wallet')}
                className="flex-1 py-3 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                💸 Send
              </button>
              <button
                onClick={() => navigate('/recover')}
                className="flex-1 py-3 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                🛡️ Recover
              </button>
            </div>

            {/* 🔹 Connection Status */}
            <div className="pt-6 border-t border-gray-200 text-left text-sm text-gray-700 space-y-1">
              <p>✅ Connected to <strong>BlockDAG</strong></p>
              <p>⚡ Gasless mode <strong>enabled</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

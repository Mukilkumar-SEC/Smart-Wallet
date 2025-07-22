import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";
import { useWalletSetup } from "../hooks/walletSetup";

const Recover = () => {
  const { signer } = useWalletSetup();
  const [guardian, setGuardian] = useState("");
  const [isGuardianAdded, setIsGuardianAdded] = useState(false);
  const [newOwner, setNewOwner] = useState("");

  const handleAddGuardian = async (e) => {
    e.preventDefault();
    if (!signer) return alert("Wallet not connected");
    if (!ethers.utils.isAddress(guardian)) return alert("Invalid guardian address");

    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.addGuardian(guardian);
      await tx.wait();

      alert("✅ Guardian added successfully!");
      setIsGuardianAdded(true);
    } catch (err) {
      alert("❌ Failed to add guardian: " + err.message);
    }
  };

  const handleRemoveGuardian = () => {
    setGuardian("");
    setIsGuardianAdded(false);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700 flex items-center justify-center">
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-10 text-center">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6">🛡️ Recover Wallet</h2>
        <form className="space-y-4" onSubmit={handleAddGuardian}>
          {!isGuardianAdded ? (
            <>
              <input
                type="text"
                value={guardian}
                onChange={(e) => setGuardian(e.target.value)}
                placeholder="Enter Guardian Address"
                className="w-full bg-blue-200 px-4 py-2 border rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
              >
                Add Guardian
              </button>
            </>
          ) : (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex justify-between items-center">
              <span className="truncate">{guardian}</span>
              <button
                onClick={handleRemoveGuardian}
                className="ml-4 text-red-500 hover:text-red-700 text-lg"
              >
                ❌
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Recover;

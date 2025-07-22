import React, { useState } from "react";
import { useWalletSetup } from "../hooks/walletSetup";
import { ethers } from "ethers";

const Wallet = () => {
  const { signer, owner, contractBalance } = useWalletSetup();
  const [txTo, setTxTo] = useState("");
  const [txAmount, setTxAmount] = useState("");

  const handleExecute = async (e) => {
    e.preventDefault();
    if (!signer) return alert("Wallet not connected");
    if (!ethers.utils.isAddress(txTo)) return alert("Invalid address");
    if (parseFloat(txAmount) <= 0) return alert("Invalid amount");

    try {
      const tx = await signer.sendTransaction({
        to: txTo,
        value: ethers.utils.parseEther(txAmount),
      });
      await tx.wait();
      alert("Transaction successful");
      setTxTo("");
      setTxAmount("");
    } catch (err) {
      alert("Transaction failed: " + err.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700 flex items-center justify-center">
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-10 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">💸 Send Transaction</h2>
        <p className="text-sm mb-2 text-gray-600">
          Owner: <strong>{owner || "Loading..."}</strong>
        </p>
        
        <form onSubmit={handleExecute} className="space-y-4">
          <input type="text" value={txTo} onChange={(e) => setTxTo(e.target.value)} placeholder="Recipient Address" className="w-full bg-blue-200 px-4 py-2 border rounded-lg focus:outline-none" />
          <input type="number" value={txAmount} onChange={(e) => setTxAmount(e.target.value)} placeholder="Amount (ETH)" className="w-full bg-blue-200 px-4 py-2 border rounded-lg focus:outline-none" />
          <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Wallet;

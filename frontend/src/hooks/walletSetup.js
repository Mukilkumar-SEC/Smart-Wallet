// src/walletSetup.js (or src/hooks/walletSetup.js if you used a hooks folder)
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";

export const useWalletSetup = () => {
  const [signer, setSigner] = useState(null);
  const [owner, setOwner] = useState("");
const [userBalance, setUserBalance] = useState("");

  useEffect(() => {
    const setup = async () => {
      try {
        if (!window.ethereum) {
          alert("MetaMask not detected");
          return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signerInstance = provider.getSigner();
        setSigner(signerInstance);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signerInstance);
        const ownerAddress = await contract.owner();
        setOwner(ownerAddress);

        const userAddress = await signerInstance.getAddress();
const balance = await provider.getBalance(userAddress);

setUserBalance(ethers.utils.formatEther(balance));

      } catch (err) {
        console.error("Wallet setup failed:", err);
      }
    };

    setup();
  }, []);

return { signer, owner, userBalance };
};

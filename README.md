# SafePass Wallet 🔐

### BlockDAG Hackathon Submission – Team VaultMinds  
**Project Theme:** Smart Wallets & UX

**Team Members:** MukilKumar V,Divya K,Vinitha D,Mukesh V,Aadhithya D

## 📌 Project Overview

**SafePass Wallet** is a next-generation smart wallet designed to make Web3 as accessible and simple as Web2. Built for the BlockDAG Hackathon, SafePass Wallet eliminates onboarding barriers like seed phrases, wallet setup complexity, and gas fee management.

### 🔑 Core Features:
- **No seed phrase required** (OAuth2 / WebAuthn social login)
- **Gasless transactions** using sponsored BDAG tokens
- **Social recovery** through trusted guardians
- **Plug-and-play SDK** for developers to easily integrate login & wallet connection
- **Modern PWA frontend** for seamless UX

## 🎯 Purpose

Our mission is to onboard the **next billion users** into Web3 by simplifying the wallet experience:
- Like Web2 apps — **frictionless, secure, and recoverable**.
- Powered by **account abstraction**, **relayer infrastructure**, and **social authentication**.


## 🛠️ Tech Stack

| Layer              | Technology                                    |
|--------------------|-----------------------------------------------|
| Smart Contracts     | Solidity on BlockDAG EVM Chain                |
| Backend             | Node.js + Express (Relayer, Guardians Mgmt.)  |
| Frontend            | React + Vite (PWA), ethers.js, SDK            |
| Storage             | IPFS / Filebase (for backup metadata)         |
| Authentication      | OAuth2, WebAuthn, Firebase Auth               |


## 🛡️ Core Modules

### 1️⃣ Smart Contract Wallet
- EVM-compatible, account abstraction
- Access control and guardian-based recovery

### 2️⃣ Authentication Layer
- OAuth2 / Firebase for social login
- Identity mapped to wallet addresses

### 3️⃣ Gasless Transaction System
- Relayer service for submitting user transactions
- Gas paid from sponsor wallet

### 4️⃣ Social Recovery Module
- Guardian approval system (2-of-3 threshold)

### 5️⃣ Developer SDK
- SDK for wallet login & dApp connection
- Supports gasless user interaction in dApps



## 🛠️ How to Run Locally

### 🔹 Frontend
```bash
cd frontend
npm install
npm run dev
```
### 🔹Smart Contracts
```bash
cd smart-contracts
npm install
npx hardhat compile
npx hardhat deploy
```

### Contract Address

0x931B2777554D524449e7559811C54a04D3495ec6
(Deployed to BlockDAG testnet)

#### Login Page
<img width="1917" height="1079" alt="image" src="https://github.com/user-attachments/assets/b0fd239a-300e-4d17-a95b-e6bbd0a07774" />

#### Smart Wallet Dashboard
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/d402c9fc-e43d-4f01-9844-4aa49b4c2024" />

#### Transaction Page
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/cd1d726c-9142-416a-b65f-1acc6de6ebe1" />

#### Gaurdian Page
<img width="1918" height="1079" alt="image" src="https://github.com/user-attachments/assets/9513a64f-2be4-4805-82ac-3028ed75bdea" />

#### Metamask request
<img width="1919" height="1021" alt="Screenshot 2025-07-22 220521" src="https://github.com/user-attachments/assets/7b9fd57c-49d6-44d7-86d8-68c38b8df7cb" />

#### Request confirmation
<img width="1919" height="1017" alt="Screenshot 2025-07-22 221710" src="https://github.com/user-attachments/assets/5ac2b465-2709-4a1e-b6e0-142da945e1f7" />

#### Transactions
<img width="1910" height="1015" alt="Screenshot 2025-07-22 224002" src="https://github.com/user-attachments/assets/6fd5cac4-dcb1-433d-88c0-35fcf9d2f9c8" />

#### Gaurdian acceptance
<img width="1919" height="1019" alt="Screenshot 2025-07-22 233528" src="https://github.com/user-attachments/assets/1ee08a3d-0565-43ef-9484-3023174df4a1" />




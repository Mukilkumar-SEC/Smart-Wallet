const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log(`Deployer Balance: ${hre.ethers.formatEther(balance)} ETH`);

  const SafePassWallet = await hre.ethers.getContractFactory("SafePassWallet");

  const wallet = await SafePassWallet.deploy(deployer.address);

  await wallet.waitForDeployment();

  const deployedAddress = await wallet.getAddress();
  console.log(`SafePassWallet deployed at address: ${deployedAddress}`);

  const newBalance = await hre.ethers.provider.getBalance(deployer.address);
  console.log(`Deployer Balance after deployment: ${hre.ethers.formatEther(newBalance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SafePassWallet {
    address public owner;
    mapping(address => bool) public guardians;

    constructor(address _owner) {
        owner = _owner;
    }

    function execute(address to, uint256 amount) external {
    require(msg.sender == owner, "Not authorized");
    require(address(this).balance >= amount, "Insufficient contract balance");
    payable(to).transfer(amount);
}

    function addGuardian(address guardian) public {
        require(msg.sender == owner, "Only owner");
        guardians[guardian] = true;
    }

    receive() external payable {} // To allow wallet to receive ETH
}

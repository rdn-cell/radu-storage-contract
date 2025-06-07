// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StorageComparison {
    uint256 public storedValue;

    // =========================
    // STORAGE
    // =========================
    function writeToStorage(uint256 _value) public {
        storedValue = _value; // modifică starea blockchainului
    }

    // =========================
    // MEMORY
    // =========================
    function sumMemory(uint256[] memory input) public pure returns (uint256) {
        uint256 total;
        for (uint i = 0; i < input.length; i++) {
            total += input[i];
        }
        return total;
    }

    // =========================
    // CALLDATA
    // =========================
    function sumCalldata(uint256[] calldata input) external pure returns (uint256) {
        uint256 total;
        for (uint i = 0; i < input.length; i++) {
            total += input[i];
        }
        return total;
    }

    // =========================
    // STACK
    // =========================
    function computeStack() public pure returns (uint256) {
        uint256 a = 7;
        uint256 b = 5;
        unchecked {
            return a * b + 10;
        }
    }
}

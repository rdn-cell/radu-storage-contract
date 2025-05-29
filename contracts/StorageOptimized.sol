// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StorageOptimized {
    uint256 public storedValue;

    function setStoredValue(uint256 _value) public {
        storedValue = _value;
    }

    function getStoredValue() public view returns (uint256) {
        return storedValue;
    }

    function useMemory(uint256[] memory input) public pure returns (uint256) {
        return input[0];
    }

    function useCalldata(uint256[] calldata input) external pure returns (uint256) {
        return input[0];
    }

    function useStack() public pure returns (uint256) {
        uint256 a = 5;
        uint256 b = 3;
        unchecked {
            return a + b;
        }
    }
}



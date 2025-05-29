const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StorageOptimized", function () {
  let contract;

  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("StorageOptimized");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should store and retrieve value", async function () {
    await contract.setStoredValue(100);
    expect(await contract.getStoredValue()).to.equal(100);
  });

  it("should return first element from memory array", async function () {
    const result = await contract.useMemory([10, 20, 30]);
    expect(result).to.equal(10);
  });

  it("should return first element from calldata array", async function () {
    const result = await contract.useCalldata([99, 88, 77]);
    expect(result).to.equal(99);
  });

  it("should calculate sum using stack and unchecked", async function () {
    const result = await contract.useStack();
    expect(result).to.equal(8);
  });
});



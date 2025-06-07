const { expect } = require("chai");
const hre = require("hardhat");

describe("StorageComparison", function () {
  let contract;

  beforeEach(async () => {
    const ContractFactory = await hre.ethers.getContractFactory("StorageComparison");
    contract = await ContractFactory.deploy();
    await contract.waitForDeployment(); // ✅ corect pentru Hardhat 2.21+
  });

  it("should write to storage", async () => {
    const tx = await contract.writeToStorage(42);
    const receipt = await tx.wait();
    console.log("Gas used [writeToStorage]:", receipt.gasUsed.toString());
  });

  it("should return correct sum (memory)", async () => {
    const result = await contract.sumMemory([1, 2, 3]);
    expect(result).to.equal(6);
  });

  it("should return correct sum (calldata)", async () => {
    const result = await contract.sumCalldata([1, 2, 3]);
    expect(result).to.equal(6);
  });

  it("should return stack result", async () => {
    const result = await contract.computeStack();
    expect(result).to.equal(7 * 5 + 10);
  });
});

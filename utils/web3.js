import Web3 from "web3";
import { abi } from "./artifacts/contracts/Cert.sol/Cert.json";
import { contract, deployer } from "./details.json";

const web3 = new Web3('http://127.0.0.1:8545');
export const myContract = new web3.eth.Contract(abi, contract);
export const account = deployer;
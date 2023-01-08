import { account, myContract } from "~~/utils/web3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const receipt = await myContract.methods.issueCertificate(body.certID, body.name, body.course, body.grade, body.date).send({ from: account, gasLimit: 987000 });
  return {
    statusCode: 201,
    message: "success",
    receipt
  }
});

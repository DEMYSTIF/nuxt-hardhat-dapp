import { myContract } from "~~/utils/web3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body);
    const result = await myContract.methods.Certificates(body.certID).call();
    if (result.name !== "") {
        return {
            status: 200,
            message: "success",
            result
        }
    } else {
        return {
            status: 404,
            message: "invalid credential",
        }
    }
});

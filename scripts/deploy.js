const hre = require('hardhat');
const fs = require('fs');

async function main() {
	const Contract = await hre.ethers.getContractFactory('Cert');
	const cert = await Contract.deploy();
	
	let details = {
		deployer: cert.signer.address,
		contract: cert.address
	};
  console.log(`${details.deployer} deployed to ${details.contract}`);

	fs.writeFile('./utils/details.json', JSON.stringify(details, null, 4), (err) => {
		if (err) {
			return console.log(err);
		}
		return console.log('Details are saved');
	});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
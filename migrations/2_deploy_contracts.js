const moment = require('moment');
const TokenVesting = artifacts.require("TokenVesting");

function deployContract(deployer) {

  const beneficiary = "0x7b4f7ebf4fa6a9ce2bd69839abea29d65c1d9b23";

  const startDate = moment('2018-05-24T16:05:00.000Z');

  const duration = moment.duration(6, 'months');
  const cliff = moment.duration(0, 'months');

  const revocable = true;

  const startUnix = startDate.unix();
  const durationUnix = duration.asSeconds();
  const cliffUnix = cliff.asSeconds();

  //console.log(startUnix, durationUnix, cliffUnix);

  deployer.deploy(TokenVesting, beneficiary, startUnix, cliffUnix, durationUnix, revocable || false);

}

module.exports = deployContract;


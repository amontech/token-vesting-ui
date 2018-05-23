const TokenVesting = artifacts.require("TokenVesting")

module.exports = function(deployer) {
  const beneficiary = "0x1E6876a6C2757de611c9F12B23211dBaBd1C9028"

  const start = 1450656000
  const cliff = 31536000 // ~1 yr
  const duration = 126144000 // ~4yrs

  deployer.deploy(TokenVesting, beneficiary, start, cliff, duration, true)
}

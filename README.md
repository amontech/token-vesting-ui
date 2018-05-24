# Token Vesting Dapp

Web-based GUI to interact with the [Token Vesting contract](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20/TokenVesting.sol) provided by the [OpenZeppelin](https://openzeppelin.org) [library](https://github.com/OpenZeppelin/zeppelin-solidity).

![Token Vesting Dapp](https://github.com/OpenZeppelin/token-vesting-ui/blob/master/example.png)

## Usage

### 1. Clone the repo
```
git clone git@github.com:OpenZeppelin/token-vesting-ui.git
```

### 2. Install the dependencies
```
npm install
```

Also make sure you have [Metamask](https://metamask.io/) installed, pointing to the right network and your account is unlocked.

### 3. Build the contracts with truffle
```
npx truffle compile
```
> Note: the `npx` command [comes with npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) as of npm@5.2.0 version.

### 4. Open application
Deployed app :
[https://token-vesting-ui.netlify.com](https://token-vesting-ui.netlify.com)
Or you can run in local
```
npm start
```

### 5. Deploy your own vesting contract
If you don't have a vesting contract to try this out, deploy your own easily:

#### i. Make sure you are connected to an ethereum node. You can use [testrpc](https://github.com/ethereumjs/testrpc) to simulate one:
```
npx testrpc
```

#### ii. Edit your vesting configuration

Edit the file `migrations/2_deploy_contracts.js` with the correct beneficiary, start date, duration and cliff. 
Revocable allow contract creator to withdraw the not yet released tokens.

#### iii. Deploy the contracts:
```
npx truffle migrate
```

You should get a `TokenVesting` address:
```
Compiling ./contracts/MyVesting.sol...
Compiling zeppelin-solidity/contracts/math/Math.sol...
[...]
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x238905c90b586a1e29a510aee9312ec3dbf1276723510191604cdf32837cb755
  Migrations: 0xd9d268db0a1926847b50f4256be8d9f4ea2140e2
Saving successful migration to network...
  ... 0x51161a48ec8d18857ff1abecca4b67c56e5243a4258a3e640f7701bd43bfb7cb
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying TokenVesting...
  ... 0x100a31e8a48e357ea26b3720c573a56e2bb37a86fbba5953c88206f68f00c590
  TokenVesting: 0x5c95714bb1e0f0b41548d1437f1fcb07ea1c23f8
Saving successful migration to network...
  ... 0x79289cc9b1c8053e7cc9f218bd6edffae057768d85a0a10ad9159334b678fdd6
Saving artifacts...

```

These are our address:
```
TokenVesting: 0x5c95714bb1e0f0b41548d1437f1fcb07ea1c23f8
```

To deploy on test network or mainnetwork, check the truffle.js file. 
You can either use a mnemonic that you put inside a `.env` file along with an infura API key
You can also deploy to mainnet with a ledger device.

```
npx truffle migrate --network mainnet_ledger
```


### 6. Ready!
Go to `http://localhost:3000/<token-vesting-address>/<erc20-token-address>` and interact with the contract!


### 7. Interact with the contract

You must have Metamask open and configured in your browser to be able to interact with the contract.

- As beneficiary:
    You can release your coin when it's time. Assure that the account selected in metamast is the beneficiary one, then release the token by accepting the transaction. 

- As contract owner:
    If contract is revocable, the contract owner can withdraw unreleased token. Also needs to select the owner account in metamask.
    
If you don't want to use metamask or this interface, you can use myetherwallet. The ABI is inside `contract/build/TokenVesting.json` file.

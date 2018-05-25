const LedgerWalletProvider = require("truffle-ledger-provider");
const HDWalletProvider = require('truffle-hdwallet-provider');

require('dotenv').config();
require('babel-register');

const infuraProvider = network => new HDWalletProvider(
    process.env.MNEMONIC || '',
    `https://${network}.infura.io/${process.env.INFURA_API_KEY}`,
    0
);

const ledgerProvider = (network, networkId = 42) => {
    const ledgerOptions = {
        networkId,
        //path: "44'/60'/0'/0",
        //askConfirm: false,
        //accountsLength: 1,
        //accountsOffset: 0,
    };

    return new LedgerWalletProvider(
        ledgerOptions,
        `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
    );
};

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
        },
        ropsten: {
            provider: infuraProvider('ropsten'),
            network_id: 3, // eslint-disable-line camelcase
        },
        kovan: {
            provider: infuraProvider('kovan'),
            network_id: '42',
            gasPrice: 20000000000,
        },
        rinkeby: {
            provider: infuraProvider('rinkeby'),
            network_id: '4',
            gasPrice: 2400000000,
        },
        mainnet: {
            provider: infuraProvider('mainnet'),
            network_id: 1,
            gasPrice: 12000000000,
        },
        mainnet_ledger: {
            provider: ledgerProvider('mainnet', 1),
            network_id: 1,
            gasPrice: 15000000000,
        },
    },
};

require('dotenv').config();
require('babel-register');

const HDWalletProvider = require('truffle-hdwallet-provider');

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
    new HDWalletProvider(mnemonic, rpcEndpoint);

const infuraProvider = network => providerWithMnemonic(
    process.env.MNEMONIC || '',
    `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
);

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
            gasPrice: 15000000000,
        },
    },
};

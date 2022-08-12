require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rescue place million just entire metal gauge'; 
let testAccounts = [
"0xadf87e73c780723d58b5c77cc4d58cc64ed6706b01135f7881dee739abc24754",
"0x087588caf0836733e767e5e777f85bfc92f119941adc8a59cf2586d99cf93024",
"0x41ca8862779916c8889571bf59874a9bf10631c1f9b3323195c5498eaa034cd9",
"0x3e07f9031a251eeffcc14ffbfd5b396261f6fc71fc0195e6df6f286b23433128",
"0x83c0e841b2c4c66e44d05c60cb75861bc4ac672b4149a7316e0ea20f676e6507",
"0x6ef54a9970250f93b3bef1cfbb7882cf8c6a8c4eea4bb9988a2b9c2a2071cccb",
"0x43bdc060db200d56617ad99a552fefde1a33f9acec36b773b843c2400050fe88",
"0x35c1e9b82e96764945819f7e8ec408f5245fdb87ef0c728e23818bfab139130f",
"0x7d350a33202aed78db4826cbc890b6a6b197279e5c9217ebeb9404bb25c106da",
"0x29e476f7c3a21f6f49fcd425191ab4bc46d9384745831ff463f581ec13afbf42"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


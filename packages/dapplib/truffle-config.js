require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy razor oil history inner private slot gauge'; 
let testAccounts = [
"0xa00989c94df4552afc64af11b273bc861f51accc53c4fa669d2ca4a231e904ae",
"0xb2b04aec7b33d000e46bc0c2f225a45804610621c3d345df4558eeb1aa634399",
"0x4e666abc9f683673b778da7512d3286fb8812a0c8a0f617217b23a5d08a323d4",
"0xf23bbd0c340108dcf26a762484e9b343ac6223f7c89ecd480c063cb759eef6fa",
"0xceb9ce646b8c99a8a43c541270e9ddb93643bc5af7139699f3153daa04ec2b7f",
"0x7f842ad3dd07953edb407fe56d33dae64a2b59eaca9c707bfff7522b55894878",
"0x5d6378004f2bddb1ac36168968496cab51b60d11c084de5fd6dd35de998a5d3a",
"0x907b7a421fe1467a20341a4245beaf13e7a618ec9ef2020e2b449adb428de190",
"0x1f37a6b5eea6350fd4fa83c3fc86b55dfec9a6a17d256926f64a689c2c2df7f2",
"0x2f350811627f5efae34ac5f925e2dd08ab6a87279a5536bffcee8227511c9c8d"
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


// require('./contracts/Inbox.sol');  // Bad //  Remember, whenever we require a file into a node project, the node engine will attempt to execute that contents of the file as though it were JavaScript code.So if we attempt to require in the contract file, it's going to immediately throw an error, saying, Hey, this isn't JavaScript code that you're requiring.

const path = require('path');
const fs = require('fs');
const solc = require("solc");
const Web3 = require('web3');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source,1).contracts[':Inbox'];
//console.log(solc.compile(source,1));
// console.log(Web3.modules.Eth);
const Web3 = require('web3')

const web3 = new Web3("https://kovan.infura.io/v3/12359696987a938")
const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
// chainlink AggregatorV3Interface contract address
const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
const base_price = 1

// set timer that runs every hour
setInterval(async () => {
  console.log('price feed')
  // latestRoundData returns int
  const roundData = await priceFeed.methods.latestRoundData().call()
  console.log("Latest Round Data ", roundData)
  // rebase if price differs from peg
  if (roundData != base_price) {
    do_rebase(roundData, base_price)
  }
}, 60 * 60 * 1000);

const do_rebase = (latest_price, base_price) => {
  //contract or expand the token suppy
  console.log(latest_price, base_price)
}


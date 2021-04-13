import Web3 from 'web3';
const provider = window.ethereum;
provider.enable();
const web3 = new Web3(provider);
 
export default web3;

// function loadWeb3() {

// // Detect Ethereum provider
//   if (window.ethereum) {
//     try {
//       window.web3 = new Web3(window.ethereum);
//       return window.web3;
//     }
//     catch (error) {
//       if (error.code === 4001) {
//         window.alert("Permission denied!");
//       }
//     }
//   }
//   else if (window.web3) {
//     window.web3 = new Web3(window.web3.currentProvider);
//     return window.web3;
//   }
//   else {
//     window.alert('Non-Ethereum browser detected. You should consider trying out Metamask!')
//   }
// };

// const web3 = loadWeb3();

// export default web3;

// truffle-hdwallet-provider version 0.0.3
// const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode })
//     .send({ gas: '1000000', from: accounts[0] });

// truffle-hdwallet-provider versions 0.0.4, 0.0.5 and 0.0.6
// const result = await new web3.eth.Contract(JSON.parse(interface))
//      .deploy({data: '0x' + bytecode }) // add 0x bytecode
//      .send({from: accounts[0]}); // remove 'gas'
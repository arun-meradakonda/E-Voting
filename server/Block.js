var Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');



var SmartContractAddress = "0x3f9c070435D983a251bEcc71D72bD523505238c8";
var ABI=require("./build/contracts/Demo.json");
var SmartContractABI =ABI["abi"];
var address = "0xc8E2F9e7736f1890AF610b4c40D2fFA3A49fA07d"
var privatekey = "7436144ea8b6852652dcba629f7c6c8f9f88397116d9dd66b11536c4457a13de";
var rpcurl = "HTTP://127.0.0.1:8545";

 module.exports={sendData: async function (para){

  console.log("in function");
  var provider = new Provider(privatekey, rpcurl);
  var web3 = new Web3(provider)
  var myContract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
  var oldvalue = await myContract.methods.readData().call();
  console.log("oldvalue", oldvalue); 


  var receipt = await myContract.methods.updateData(para).send({ from: address });
  

  var newvalue = await myContract.methods.readData().call();
  console.log("newvalue", newvalue);

  console.log("done with all things");

}

// sendData(900).then(()=>{
//   console.log("end");
//   setTimeout((function() { 
//     return process.exit(0);
//     }), 1000);
  
// })

 }

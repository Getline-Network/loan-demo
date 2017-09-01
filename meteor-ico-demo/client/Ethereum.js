import { ReactiveVar } from 'meteor/reactive-var';


if(typeof web3 === 'undefined'){
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

EthBlocks.init();
EthAccounts.init();

Template.menu.helpers({
  currentBlock() {
    return EthBlocks.latest.number;
  }
});


var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "print",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "printValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "allowance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "decimalUnits",
          "type": "uint256"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "name": "howMuchToPrint",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "Print",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ];

LoanAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "fundraisingDeadline",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentState",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "widthrawInvestment",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "payback",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paybackDeadline",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "collateralToken",
      "outputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "fundraisingBlocksCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdrawLoan",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowedToken",
      "outputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "amountWanted",
      "outputs": [
        {
          "name": "_amountWanted",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "invest",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "gatherCollateral",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paybackBlocksCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "name": "_loanToken",
          "type": "address"
        },
        {
          "name": "_liege",
          "type": "address"
        },
        {
          "name": "_amountWanted",
          "type": "uint256"
        },
        {
          "name": "_interestPermil",
          "type": "uint16"
        },
        {
          "name": "_fundraisingBlocksCount",
          "type": "uint256"
        },
        {
          "name": "_paybackBlocksCount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        }
      ],
      "name": "FundraisingBegins",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "trustee",
          "type": "address"
        }
      ],
      "name": "NewInvestment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        }
      ],
      "name": "FundraisingSucessfull",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        }
      ],
      "name": "FundraisingFailed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        }
      ],
      "name": "LoanPaidback",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "liege",
          "type": "address"
        }
      ],
      "name": "LoanDefaulted",
      "type": "event"
    }
];


var ThreePrintAbi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "print",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_tokenA",
          "type": "address"
        },
        {
          "name": "_tokenB",
          "type": "address"
        },
        {
          "name": "_tokenC",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ];









var LoanBinary =  "0x60606040526000600281905560038190556004805460ff19166001835b0217905550341561002c57600080fd5b60405160e080610e0e833981016040528080519190602001805191906020018051919060200180519190602001805191906020018051919060200180519150505b6100878787878787640100000000610aba6101c382021704565b600581518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a03929092169190911790556040820151600282018054600160a060020a031916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a082015160058201805461ffff191661ffff9290921691909117905560c0820151816006015560e08201518160080155610100820151816009015561012082015181600a0155610140820151600b8201805460ff1916911515919091179055610160820151600b820180549115156101000261ff0019909216919091179055610180820151600b9091018054911515620100000262ff00001990921691909117905550600082905560018190555b5050505050505061026e565b6101cb610202565b600160a060020a03808716825285811660208301526080820184905261ffff831660a0830152841660408201525b95945050505050565b6101a06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082015290565b610b918061027d6000396000f300606060405236156100a95763ffffffff60e060020a60003504166306a9d1a981146100ae5780630c3f6acf146100d35780632426493f1461010a578063854bec871461011f578063a36be9a114610134578063b2016bd414610159578063b88b4ad514610188578063c4c77e25146101ad578063c710ccd6146101c2578063ca5f4282146101f1578063e8b5e51f14610216578063f5caccad1461022b578063ffabf9a814610240575b600080fd5b34156100b957600080fd5b6100c1610265565b60405190815260200160405180910390f35b34156100de57600080fd5b6100e661026b565b604051808260038111156100f657fe5b60ff16815260200191505060405180910390f35b341561011557600080fd5b61011d610274565b005b341561012a57600080fd5b61011d610371565b005b341561013f57600080fd5b6100c161047b565b60405190815260200160405180910390f35b341561016457600080fd5b61016c610481565b604051600160a060020a03909116815260200160405180910390f35b341561019357600080fd5b6100c1610491565b60405190815260200160405180910390f35b34156101b857600080fd5b61011d610497565b005b34156101cd57600080fd5b61016c610585565b604051600160a060020a03909116815260200160405180910390f35b34156101fc57600080fd5b6100c1610595565b60405190815260200160405180910390f35b341561022157600080fd5b61011d61060f565b005b341561023657600080fd5b61011d6107ca565b005b341561024b57600080fd5b6100c16108a5565b60405190815260200160405180910390f35b60025481565b60045460ff1681565b60015b60045460ff16600381111561028857fe5b148015610296575043600254105b156102a8576102a36108ab565b6102d7565b60025b60045460ff1660038111156102bc57fe5b1480156102ca575043600354105b156102d7576102d761095e565b5b5b6003805b60045460ff1660038111156102ee57fe5b146102f857600080fd5b7342dc695f876d09d2a934d0d572cd9d58fbe800a36353942b0260053360405160e060020a63ffffffff85160281526004810192909252600160a060020a0316602482015260440160006040518083038186803b151561035757600080fd5b6102c65a03f4151561036857600080fd5b5050505b5b505b565b60015b60045460ff16600381111561038557fe5b148015610393575043600254105b156103a5576103a06108ab565b6103d4565b60025b60045460ff1660038111156103b957fe5b1480156103c7575043600354105b156103d4576103d461095e565b5b5b6002805b60045460ff1660038111156103eb57fe5b146103f557600080fd5b7342dc695f876d09d2a934d0d572cd9d58fbe800a363d47a243a600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561044557600080fd5b6102c65a03f4151561045657600080fd5b5050600480546003925060ff19166001835b021790555061036c610a11565b5b5b505b565b60035481565b600554600160a060020a03165b90565b60005481565b60015b60045460ff1660038111156104ab57fe5b1480156104b9575043600254105b156104cb576104c66108ab565b6104fa565b60025b60045460ff1660038111156104df57fe5b1480156104ed575043600354105b156104fa576104fa61095e565b5b5b6002805b60045460ff16600381111561051157fe5b1461051b57600080fd5b7342dc695f876d09d2a934d0d572cd9d58fbe800a36396d4a538600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561035757600080fd5b6102c65a03f4151561036857600080fd5b5050505b5b505b565b600654600160a060020a03165b90565b60007342dc695f876d09d2a934d0d572cd9d58fbe800a363202a14df6005836040516020015260405160e060020a63ffffffff8416028152600481019190915260240160206040518083038186803b15156105ef57600080fd5b6102c65a03f4151561060057600080fd5b50505060405180519150505b90565b60015b60045460ff16600381111561062357fe5b148015610631575043600254105b156106435761063e6108ab565b610672565b60025b60045460ff16600381111561065757fe5b148015610665575043600354105b156106725761067261095e565b5b5b6001805b60045460ff16600381111561068957fe5b1461069357600080fd5b7342dc695f876d09d2a934d0d572cd9d58fbe800a3630d7e4c2760053360405160e060020a63ffffffff85160281526004810192909252600160a060020a0316602482015260440160006040518083038186803b15156106f257600080fd5b6102c65a03f4151561070357600080fd5b5050600754600160a060020a033381169250167f44dd6835c3e7844115d380f7c1dd6082ad5a4231ec873985a11fcaf370c2348160405160405180910390a37342dc695f876d09d2a934d0d572cd9d58fbe800a3639b197bc4600560006040516020015260405160e060020a63ffffffff8416028152600481019190915260240160206040518083038186803b151561079b57600080fd5b6102c65a03f415156107ac57600080fd5b505050604051805190501561036c5761036c610a61565b5b5b5b505b565b6000805b60045460ff1660038111156107df57fe5b146107e957600080fd5b7342dc695f876d09d2a934d0d572cd9d58fbe800a363aa586fea600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561083957600080fd5b6102c65a03f4151561084a57600080fd5b5050600480546001925060ff191682805b02179055506000544301600255600754600160a060020a03167fe8a4175c0c55b38116edd863f28855d5af500a0d2ad4df217ba5bf5a94b4ff4660405160405180910390a25b5b50565b60015481565b7342dc695f876d09d2a934d0d572cd9d58fbe800a3630905979a600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b15156108fb57600080fd5b6102c65a03f4151561090c57600080fd5b5050600480546003925060ff19166001835b0217905550600754600160a060020a03167f2d7d63a3f6363a400f86dfab75def6477b6609fe5369c2a63c5e437941d80f4c60405160405180910390a25b565b7342dc695f876d09d2a934d0d572cd9d58fbe800a363578bdfa8600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b15156109ae57600080fd5b6102c65a03f415156109bf57600080fd5b5050600480546003925060ff19166001835b0217905550600754600160a060020a03167ff4e5cf42cbb1d0c6c91e16d925349feb6c5d970652f6ec77b1ff1262f7284cd560405160405180910390a25b565b600480546003919060ff19166001835b0217905550600754600160a060020a03167f3c1036d8e135b143151b235d86c485eef7bf99e4b66a1ea56a1839e90e006ab160405160405180910390a25b565b6001805443016003556004805460029260ff1990911690835b0217905550600754600160a060020a03167fdca26b403a05652a5cb9004bc5f09efcd16e056c08d332d9612661b782c4ab0960405160405180910390a25b565b610ac2610af9565b600160a060020a03808716825285811660208301526080820184905261ffff831660a0830152841660408201525b95945050505050565b6101a06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101608201819052610180820152905600a165627a7a72305820980912275166121eb13478293972cdea0706e26505fd4851fdac54a3356f1d770029";

var PrintableToken = web3.eth.contract(abi);
var ThreePrint = web3.eth.contract(ThreePrintAbi);

var ThreePrintInstance = ThreePrint.at("0xc30bc8801bd401f76c98eb0f268cf802170f9a14");


var InstanceCol = PrintableToken.at("0xf44bc010359cc69bfb0004e0b1049474f1536067");
var InstanceGTA = PrintableToken.at("0xbf1965bbbf6bc75a118de13af9f640f6d4f3304a");
var InstanceGTB = PrintableToken.at("0x5fdbe5ad6eec00c9c05d8ef96f9eab8391bdf858");


LoanClass = web3.eth.contract(LoanAbi);

//var LoanInstance = new ReactiveVar(undefined);




balanceCol = new ReactiveVar(new BigNumber(0));
balanceGTA = new ReactiveVar(new BigNumber(0));
balanceGTB = new ReactiveVar(new BigNumber(0));
/*
balDownloadCol = new ReactiveVar(false);
balDownloadGTA = 0;
balDownloadGTB = new ReactiveVar(false);
*/

printValue = 100 * 10000;


Template.TokenIndicators.onCreated(function(){



      var account = undefined;
      //accountInterval = Meteor.setInterval(function() {

          account = web3.eth.accounts[0];


          InstanceCol.balanceOf(account,(e,r)=>{
          balanceCol.set(r);
                });

          InstanceGTA.balanceOf(account,(e,r)=>{
          balanceGTA.set(r);
                });

          InstanceGTB.balanceOf(account,(e,r)=>{
          balanceGTB.set(r);
                });
      //}, 1000);


/* for transfers - not supported yet
      var event1 = InstanceCol.Transfer([{'valueB': account}]);
      var event2 = InstanceGTA.Transfer([{'valueB': account}]);
      var event3 = InstanceGTB.Transfer([{'valueB': account}]);

      // watch for changes
        event1.watch(function(error, result){
          if (!error){
            console.log("Event1t",result);
            balanceCol.set(result);
          }
          else console.log("Event1t",error);
        });

        event2.watch(function(error, result){
          if (!error){
            console.log("Event2t",result);
            balanceGTA.set(result);
          }
          else console.log("Event2t",error);
        });

        event3.watch(function(error, result){
          if (!error){
            console.log("Event3t",result);
            balanceGTB.set(result);
          }
          else console.log("Event3t",error);
        });
*/

      var event1p = InstanceCol.Print([{'valueA': account}]);
      var event2p = InstanceGTA.Print([{'valueA': account}]);
      var event3p = InstanceGTB.Print([{'valueA': account}]);

      // watch for changes
        event1p.watch(function(error, result){
          if (!error){
            console.log("Event1p",result);
            balanceCol.set(new BigNumber(printValue + parseFloat(balanceCol.get().valueOf())));
          }
          else console.log("Event1p",error);
        });

        event2p.watch(function(error, result){
          if (!error){
            console.log("Event2p",result);
            balanceGTA.set(new BigNumber(printValue + parseFloat(balanceGTA.get().valueOf())));
          }
          else console.log("Event2p",error);
        });

        event3p.watch(function(error, result){
          if (!error){
            console.log("Event3p",result);
            balanceGTB.set(new BigNumber(printValue + parseFloat(balanceGTB.get().valueOf())));
          }
          else console.log("Event3p",error);
        });



});
Template.TokenIndicators.onDestroyed(function(){
      //Meteor.clearInterval(accountInterval);
});



Template.TokenIndicators.helpers({
  token1(){
    if((balanceCol.get().valueOf()+0)>0)
    {
      var fontSize = 100/(Math.round(Math.log(balanceCol.get().valueOf()/10000))+1);
      if(fontSize==0) fontSize = 20;
      
      var marginTop = 16-0.5*fontSize;

      return {balance: balanceCol.get().valueOf()/10000 || 0, fontSize: fontSize+"px", marginTop: marginTop+"px"};
      }
      else return {balance: balanceCol.get().valueOf/10000 || 0, fontSize: "20px", marginTop: "16px"};
    },
  token2(){
    if((balanceGTA.get().valueOf()+0)>0)
    {
      var fontSize = 100/(Math.round(Math.log(balanceGTA.get().valueOf()/10000))+1);
      if(fontSize==0) fontSize = 20;
      
      var marginTop = 16-0.5*fontSize;

      return {balance: balanceGTA.get().valueOf()/10000 || 0, fontSize: fontSize+"px", marginTop: marginTop+"px"};
      }
      else return {balance: balanceGTA.get().valueOf/10000 || 0, fontSize: "20px", marginTop: "16px"};
    },
  token3(){
    if((balanceGTB.get().valueOf()+0)>0)
    {
      var fontSize = 100/(Math.round(Math.log(balanceGTB.get().valueOf()/10000))+1);
      if(fontSize==0) fontSize = 20;
      
      var marginTop = 16-0.5*fontSize;
       
      return {balance: balanceGTB.get().valueOf()/10000 || 0, fontSize: fontSize+"px", marginTop: marginTop+"px"};
      }
      else return {balance: balanceGTB.get().valueOf/10000 || 0, fontSize: "20px", marginTop: "16px"};
    }
    });

Template.MagicAddButton.events({
	'click #magic-add-button': function () {

      var account = undefined;
          account = web3.eth.accounts[0];
		if(account)
    {
      ThreePrintInstance.print(account,(e,r)=>{res = r;});
      /*
      InstanceCol.print(account,(e,r)=>{res = r;});
  		InstanceGTA.print(account,(e,r)=>{res = r;});
  		InstanceGTB.print(account,(e,r)=>{res = r;});
      */
    }
	}
});

/*
UI.registerHelper(
  'isThereAnyAccount', function(){
    if(web3)
      if(web3.eth.accounts.length>0)
      {
        return true;
      }
    return false;
  }

  );*/

lastLoan = new ReactiveVar(undefined);

createLoan = function(
            title,
            borrow,
            currency,
            collateral,
            //fundTime,
            paybackTime,
            interest,
            description,
            ){


        var account = undefined;
            account = web3.eth.accounts[0];

      if(account)
      {
        LoanInstance = LoanClass.new(
          InstanceCol,
          InstanceGTA,
          account,
          new BigNumber(borrow*10000),
          interest*10,
          new BigNumber(10000),
          new BigNumber(10000),
          new BigNumber(10000),
          {data: LoanBinary},
          (err,res)=>{
            if(!err)
            {
             console.log(err,res);
             lastLoan.set(res);

             NewLoanInstance = LoanClass.at(res.address,(e,r)=>{

                      if (e) {
                          console.log("Error during deployment", e);
                          return;
                      }
                      if (!r.address) {
                          console.log("Waiting for deployment: ", r.transactionHash);
                      } else {
                          r.amountWanted((e1,r1)=>{console.log("Amount wanted? ",e1,r1.valueOf());});

                            if(!LoanAddresses.findOne({address: r.address}))
                            {
                                 LoanAddresses.insert({address: r.address, user: Meteor.userId()});
                                 Loans.insert({address: r.address, title: title, description: description});

                                 //Allowance+allowance transfer
                                 /*InstanceCol.allowance(account,lastLoan.get().address,collateral*10000,function(e,r){
                                  console.log("Allowance: ",e,r);

                                  InstanceCol.transfer(lastLoan.get().address,collateral*10000,function(e1,r1){
                                      console.log("Transfer: ",e1,r1);
                                    });
                                  });*/

                            }
                      }
                  });


             }
             
          });


      }

};
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
      "constant": true,
      "inputs": [],
      "name": "amountGathered",
      "outputs": [
        {
          "name": "_totalAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isFundraising",
      "outputs": [
        {
          "name": "_isFundraising",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrower",
      "outputs": [
        {
          "name": "_borrower",
          "type": "address"
        }
      ],
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
      "name": "interestPermil",
      "outputs": [
        {
          "name": "_interestPermil",
          "type": "uint16"
        }
      ],
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
  ];[
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
      "constant": true,
      "inputs": [],
      "name": "amountGathered",
      "outputs": [
        {
          "name": "_totalAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isFundraising",
      "outputs": [
        {
          "name": "_isFundraising",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrower",
      "outputs": [
        {
          "name": "_borrower",
          "type": "address"
        }
      ],
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
      "name": "interestPermil",
      "outputs": [
        {
          "name": "_interestPermil",
          "type": "uint16"
        }
      ],
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









LoanBinary =  "0x60606040526000600281905560038190556004805460ff19166001835b0217905550341561002c57600080fd5b60405160e080610eab833981016040528080519190602001805191906020018051919060200180519190602001805191906020018051919060200180519150505b6100878787878787640100000000610b576101c382021704565b600581518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a03929092169190911790556040820151600282018054600160a060020a031916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a082015160058201805461ffff191661ffff9290921691909117905560c0820151816006015560e08201518160080155610100820151816009015561012082015181600a0155610140820151600b8201805460ff1916911515919091179055610160820151600b820180549115156101000261ff0019909216919091179055610180820151600b9091018054911515620100000262ff00001990921691909117905550600082905560018190555b5050505050505061026e565b6101cb610202565b600160a060020a03808716825285811660208301526080820184905261ffff831660a0830152841660408201525b95945050505050565b6101a06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082015290565b610c2e8061027d6000396000f300606060405236156100d55763ffffffff60e060020a60003504166306a9d1a981146100da5780630c3f6acf146100ff5780632426493f14610136578063385ac7711461014b578063522c2178146101705780637df1f1b914610197578063854bec87146101c657806386f5bf88146101db578063a36be9a114610205578063b2016bd41461022a578063b88b4ad514610259578063c4c77e251461027e578063c710ccd614610293578063ca5f4282146102c2578063e8b5e51f146102e7578063f5caccad146102fc578063ffabf9a814610311575b600080fd5b34156100e557600080fd5b6100ed610336565b60405190815260200160405180910390f35b341561010a57600080fd5b61011261033c565b6040518082600381111561012257fe5b60ff16815260200191505060405180910390f35b341561014157600080fd5b610149610345565b005b341561015657600080fd5b6100ed610442565b60405190815260200160405180910390f35b341561017b57600080fd5b610183610449565b604051901515815260200160405180910390f35b34156101a257600080fd5b6101aa610466565b604051600160a060020a03909116815260200160405180910390f35b34156101d157600080fd5b610149610476565b005b34156101e657600080fd5b6101ee610580565b60405161ffff909116815260200160405180910390f35b341561021057600080fd5b6100ed61058b565b60405190815260200160405180910390f35b341561023557600080fd5b6101aa610591565b604051600160a060020a03909116815260200160405180910390f35b341561026457600080fd5b6100ed6105a1565b60405190815260200160405180910390f35b341561028957600080fd5b6101496105a7565b005b341561029e57600080fd5b6101aa610695565b604051600160a060020a03909116815260200160405180910390f35b34156102cd57600080fd5b6100ed6106a5565b60405190815260200160405180910390f35b34156102f257600080fd5b6101496106ac565b005b341561030757600080fd5b610149610867565b005b341561031c57600080fd5b6100ed610942565b60405190815260200160405180910390f35b60025481565b60045460ff1681565b60015b60045460ff16600381111561035957fe5b148015610367575043600254105b1561037957610374610948565b6103a8565b60025b60045460ff16600381111561038d57fe5b14801561039b575043600354105b156103a8576103a86109fb565b5b5b6003805b60045460ff1660038111156103bf57fe5b146103c957600080fd5b73f7ca988a96f79fded0a833e2d728ce4a59363d876353942b0260053360405160e060020a63ffffffff85160281526004810192909252600160a060020a0316602482015260440160006040518083038186803b151561042857600080fd5b6102c65a03f4151561043957600080fd5b5050505b5b505b565b600d545b90565b600060015b60045460ff16600381111561045f57fe5b1490505b90565b600754600160a060020a03165b90565b60015b60045460ff16600381111561048a57fe5b148015610498575043600254105b156104aa576104a5610948565b6104d9565b60025b60045460ff1660038111156104be57fe5b1480156104cc575043600354105b156104d9576104d96109fb565b5b5b6002805b60045460ff1660038111156104f057fe5b146104fa57600080fd5b73f7ca988a96f79fded0a833e2d728ce4a59363d8763d47a243a600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561054a57600080fd5b6102c65a03f4151561055b57600080fd5b5050600480546003925060ff19166001835b021790555061043d610aae565b5b5b505b565b600a5461ffff165b90565b60035481565b600554600160a060020a03165b90565b60005481565b60015b60045460ff1660038111156105bb57fe5b1480156105c9575043600254105b156105db576105d6610948565b61060a565b60025b60045460ff1660038111156105ef57fe5b1480156105fd575043600354105b1561060a5761060a6109fb565b5b5b6002805b60045460ff16600381111561062157fe5b1461062b57600080fd5b73f7ca988a96f79fded0a833e2d728ce4a59363d876396d4a538600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561042857600080fd5b6102c65a03f4151561043957600080fd5b5050505b5b505b565b600654600160a060020a03165b90565b6009545b90565b60015b60045460ff1660038111156106c057fe5b1480156106ce575043600254105b156106e0576106db610948565b61070f565b60025b60045460ff1660038111156106f457fe5b148015610702575043600354105b1561070f5761070f6109fb565b5b5b6001805b60045460ff16600381111561072657fe5b1461073057600080fd5b73f7ca988a96f79fded0a833e2d728ce4a59363d87630d7e4c2760053360405160e060020a63ffffffff85160281526004810192909252600160a060020a0316602482015260440160006040518083038186803b151561078f57600080fd5b6102c65a03f415156107a057600080fd5b5050600754600160a060020a033381169250167f44dd6835c3e7844115d380f7c1dd6082ad5a4231ec873985a11fcaf370c2348160405160405180910390a373f7ca988a96f79fded0a833e2d728ce4a59363d87639b197bc4600560006040516020015260405160e060020a63ffffffff8416028152600481019190915260240160206040518083038186803b151561083857600080fd5b6102c65a03f4151561084957600080fd5b505050604051805190501561043d5761043d610afe565b5b5b5b505b565b6000805b60045460ff16600381111561087c57fe5b1461088657600080fd5b73f7ca988a96f79fded0a833e2d728ce4a59363d8763aa586fea600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b15156108d657600080fd5b6102c65a03f415156108e757600080fd5b5050600480546001925060ff191682805b02179055506000544301600255600754600160a060020a03167fe8a4175c0c55b38116edd863f28855d5af500a0d2ad4df217ba5bf5a94b4ff4660405160405180910390a25b5b50565b60015481565b73f7ca988a96f79fded0a833e2d728ce4a59363d87630905979a600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b151561099857600080fd5b6102c65a03f415156109a957600080fd5b5050600480546003925060ff19166001835b0217905550600754600160a060020a03167f2d7d63a3f6363a400f86dfab75def6477b6609fe5369c2a63c5e437941d80f4c60405160405180910390a25b565b73f7ca988a96f79fded0a833e2d728ce4a59363d8763578bdfa8600560405160e060020a63ffffffff8416028152600481019190915260240160006040518083038186803b1515610a4b57600080fd5b6102c65a03f41515610a5c57600080fd5b5050600480546003925060ff19166001835b0217905550600754600160a060020a03167ff4e5cf42cbb1d0c6c91e16d925349feb6c5d970652f6ec77b1ff1262f7284cd560405160405180910390a25b565b600480546003919060ff19166001835b0217905550600754600160a060020a03167f3c1036d8e135b143151b235d86c485eef7bf99e4b66a1ea56a1839e90e006ab160405160405180910390a25b565b6001805443016003556004805460029260ff1990911690835b0217905550600754600160a060020a03167fdca26b403a05652a5cb9004bc5f09efcd16e056c08d332d9612661b782c4ab0960405160405180910390a25b565b610b5f610b96565b600160a060020a03808716825285811660208301526080820184905261ffff831660a0830152841660408201525b95945050505050565b6101a06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101608201819052610180820152905600a165627a7a723058209e72750b245e2b94777e6ed69419f75ea6a55e8fd94852c2e5328256a71f38240029";

var PrintableToken = web3.eth.contract(abi);
var ThreePrint = web3.eth.contract(ThreePrintAbi);

var ThreePrintInstance = ThreePrint.at("0xc30bc8801bd401f76c98eb0f268cf802170f9a14");


InstanceCol = PrintableToken.at("0xf44bc010359cc69bfb0004e0b1049474f1536067");
InstanceGTA = PrintableToken.at("0xbf1965bbbf6bc75a118de13af9f640f6d4f3304a");
InstanceGTB = PrintableToken.at("0x5fdbe5ad6eec00c9c05d8ef96f9eab8391bdf858");


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


// for transfers - incoming
      var event1i = InstanceCol.Transfer({'_to': account});
      var event2i = InstanceGTA.Transfer({'_to': account});
      var event3i = InstanceGTB.Transfer({'_to': account});

      // watch for changes
        event1i.watch(function(error, result){
          if (!error){
            console.log("Event1ti",result);
            balanceCol.set(new BigNumber(parseFloat(result.args._value.valueOf()) + parseFloat(balanceCol.get().valueOf())));
          }
          else console.log("Event1ti",error);
        });

        event2i.watch(function(error, result){
          if (!error){
            console.log("Event2ti",result);
            balanceGTA.set(new BigNumber(parseFloat(result.args._value.valueOf()) + parseFloat(balanceGTA.get().valueOf())));
          }
          else console.log("Event2ti",error);
        });

        event3i.watch(function(error, result){
          if (!error){
            console.log("Event3ti",result);
            balanceGTB.set(new BigNumber(parseFloat(result.args._value.valueOf()) + parseFloat(balanceGTB.get().valueOf())));
          }
          else console.log("Event3ti",error);
        });


//for transfers - outgoing
      var event1o = InstanceCol.Transfer({'_from': account});
      var event2o = InstanceGTA.Transfer({'_from': account});
      var event3o = InstanceGTB.Transfer({'_from': account});

      // watch for changes
        event1o.watch(function(error, result){
          if (!error){
            console.log("Event1to",result);
            balanceCol.set(new BigNumber(-(parseFloat(result.args._value.valueOf())) + parseFloat(balanceCol.get().valueOf())));
          }
          else console.log("Event1to",error);
        });

        event2o.watch(function(error, result){
          if (!error){
            console.log("Event2to",result);
            balanceGTA.set(new BigNumber(-(parseFloat(result.args._value.valueOf())) + parseFloat(balanceGTA.get().valueOf())));
          }
          else console.log("Event2to",error);
        });

        event3o.watch(function(error, result){
          if (!error){
            console.log("Event3to",result);
            balanceGTB.set(new BigNumber(-(parseFloat(result.args._value.valueOf())) + parseFloat(balanceGTB.get().valueOf())));
          }
          else console.log("Event3to",error);
        });


      var event1p = InstanceCol.Print({'_who': account});
      var event2p = InstanceGTA.Print({'_who': account});
      var event3p = InstanceGTB.Print({'_who': account});

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
          InstanceCol.address,
          InstanceGTA.address,
          account,
          borrow,
          interest,
          100,
          100,
          //new BigNumber(10000),
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
                                 Loans.insert({address: r.address, title: title, description: description, user: Meteor.userId()});

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
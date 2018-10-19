---
  pageClass: smart-contract
  sidebarDepth: 2
  meta:

  - name: description
    content: learn how to write and deploy your first smart contract using solidity and ethereum remix tool
  - name: keywords
    content: blockchain smart contract implementation write solidity code  how to install meta mask MetaMask write solidity
  - property: og:title
    content: Blockchain ← Write Ethereum Smart Contract
  - property: og:site-name
    content: Blockchain ← Documentation
  - property: og:type
    content: website
  - property: og:url
    content: https://documentation.tatiblockchain.co.za/get-started/smartcontracts.html
  - property: og:image
    content: https://ico.tatiblockchain.co.za/img/tati-image.jpg
  - property: og:description
    content: learn how to write and deploy your first smart contract using solidity and ethereum remix tool
  - name: twitter:card
    content: Blockchain ← Write Ethereum Smart Contract
  - name: twitter:title
    content: Blockchain ← Write Ethereum Smart Contract
  - name: twitter:description
    content: learn how to write and deploy your first smart contract using solidity and ethereum remix tool
  - name: twitter:image
    content: https://ico.tatiblockchain.co.za/img/tati-image.jpg
---

# Smart Contracts

There are a couple of ways to interact with Smart Contracts without writing a lot of code or building big and complex applications. The Ethereum Remix Tool allows you to write Ethereum Smart Contracts in Solidity and deploy them to the Network directly from your Browser.

There are other methods shown on the [Ethereum Website](https://ethereum.org/), utilizing the Ethereum Wallet, but we will not discuss these here.

## Write your First Contract on Remix

Ethereum Remix Website can be found here [Ethereum Remix](http://remix.ethereum.org)

![Ethereum Remix](/remix.png)

You can write Solidity Code directly in to the browser on this website. For optimal results use Google Chrome browser.

::: tip
In order to deploy contracts - MetaMask must be working, unlocked and enabled to the Network you would like to deploy to.
For testing , you can deploy to the Virtual Network on the Browser, in which case you will not need MetaMask.
:::

Let us write a simple Solidity Code, that can demonstrate multiple Solidity features in one page of code.

Let us dig in to the code one block at a time.

```js{4}
pragma solidity ^0.4.20;

contract HelloBlockchain {
    address public owner;
    uint public numberGreetings;


    struct Greeting {
        address greeter;
        uint value;
    }
    mapping(address => bool) public greeted;
    mapping(address => Greeting) public greetRecords;


    modifier restricted() {
        require (msg.sender == owner);
        _;
    }

    constructor () public {
        owner = msg.sender;
        numberGreetings = 0;
    }

    function greet() public payable {
        numberGreetings ++;
        greeted[msg.sender] = true;

        Greeting memory newGreet = Greeting({
            greeter: msg.sender,
            value: msg.value
        });
        greetRecords[msg.sender] = newGreet;

    }


    function withdraw() public restricted {

        owner.transfer(address(this).balance);

    }

    function getContractValue() public view returns(uint) {
        return address(this).balance;
    }

    function getSummary() public view returns (address, uint, uint) {
        return (
            owner,
            numberGreetings,
            address(this).balance
            );
    }
}
```

### Solidity Data Types

```js{4}
address public owner;
uint public numberGreetings;


struct Greeting {
    address greeter;
    uint value;
}
mapping(address => bool) public greeted;
mapping(address => Greeting) public greetRecords;
```

#### address

Address is a solidity specific data type, this is a wallet address for Ethereum, one that you would use to send money to the contract or deduct money from the contract.

#### uint

Uint is similar to Integer in Java, with a slight difference. In solidity the size of the integer must be specified, you must specify the integer size. We have uint 8 to uint256 in steps of 8. The default is uint256, if you do not specify a different size.

#### struct

Struct is similar to a Java object, or python dictionary. It stores data in a set. this is useful for keeping data records.

#### mapping

A mapping is similar to hashMap in Java, this is a preferred tool for storing data you could have easily stored in an array. The query method for a struct is different to an array. If you wanted to find one entry in an array, you have to page through the entire array until you find your record. In a struct, you just need to match the pair you are looking for. Data is stored under the key-pair specified.
There is no way to find the size of a mapping, like you would in an array - but pulling out specific data is simpler than an array. With smart contracts - we don't want to iterate through lists, it is expensive as you pay for every transaction on the network. If your list grew to thousands of entries, a simple query might cost a lot of money using arrays.

### Greet Function

```js{4}
function greet() public payable {
    numberGreetings ++;
    greeted[msg.sender] = true;

    Greeting memory newGreet = Greeting({
        greeter: msg.sender,
        value: msg.value
    });
    greetRecords[msg.sender] = newGreet;

}
```

This is a function that will alter contract state, therefore it will cost you Gas to call, but in addition we have made it a payable function, meaning you must send some ether when calling this function. There are no guards preventing you from sending an empty greet, so you can greet the contract without any ether.

When you greet the contract, the following should happen:

- The number of greetings in the contract should go up by 1.
- Your address should be added to the greeted struct (remember this is where we are storing records, in this case records of everyone who has greeted the contract).
- GreetRecords will be updated with your greeting, using the Greet Struct which will store your address and the value of your greeting (if you made any).
- Note according to our data structure - our mappings are all stored with the address of the (msg.sender) as the key.

### Initiate Contract

```js{4}
constructor () public {
    owner = msg.sender;
    numberGreetings = 0;
}
```

The constructor function is used to initiate the contract. This function is public, meaning is can be initiated from outside the contract. It then changes the state of the contract by assigning the owner variable to the (msg.sender) and setting the numberGreetings variable to zero. This means you have to pay gas to call this function.

Once you have initiated the contract, you are now the owner of the contract.

### Free Functions

There are functions you can call on a smart contract without paying Gas. These are functions that do not change the contract state, usually called for information. If you want to enquire the mapping, variables etc. You can call them for free.
You can call functions from Remix, or build a decentralized web or mobile application. We will go through the Remix process below, but if you need to build a working application, get in touch with [Tati Blockchain Project Management](https://tatiblockchain.co.za/contact), and we will build it for you.

::: tip
You can take any smart contract, if you have the contract address and the code, put it in to Remix and interact with it, call functions, information etc. The Blockchain is decentralized and interaction with the blockchain can come from anywhere, there is a node connected. For Example take CryptoKitty, a smart contract written on Ethereum - the smart contract and address is available on EtherScan > You could buy and sell Kitties from Remix, or even build your own Kitty application if you wanted.
:::

## Deploy your Smart Contract

Deploying your Smart Contract is as easy as pressing a button on Remix.
Your Remix should currently look like this below:

![Before Contract Deploy](/compile.png)

On the right hand side of the page, you should see the Contract Name in Green, this means the contract has compiled successfully. If you do not see this, investigate the errors and make sure you have clicked "auto compile" checkbox at the top.

Once you have a successfully compiled contract, you can deploy it. At the very top, next to the "Compile tab", there is "Run" tab. Click on that, make sure you gave selected Javascript VM (although it should be the default). Then click the pink "Deploy" button. Go down to your contracts, click the deployed contract and you should see this below:

![After Contract Deploy](/deployed.png)

::: tip
Congratulations, you have deployed your smart contract :tada:
You can now deploy it to any other Ethereum network, by changing the Javascript VM at the top to the network of your choice.
:::

To call functions, click on any of the buttons the contract has produced. Some functions, require input.

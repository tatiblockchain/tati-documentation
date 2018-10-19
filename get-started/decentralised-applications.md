---
  pageClass: dapps
  sidebarDepth: 2
  meta:

  - name: description
    content: learn how to write decentralized web applications for smart contracts
  - name: keywords
    content: blockchain smart contract implementation write solidity code  how to install meta mask MetaMask write solidity
  - property: og:title
    content: Blockchain ← Decentralized Applications
  - property: og:site-name
    content: Blockchain ← Documentation
  - property: og:type
    content: website
  - property: og:url
    content: https://documentation.tatiblockchain.co.za/get-started/decentralised-applications.html
  - property: og:image
    content: https://ico.tatiblockchain.co.za/img/tati-image.jpg
  - property: og:description
    content: learn how to write decentralized web applications for smart contracts
  - name: twitter:card
    content: Blockchain ← Decentralized Applications
  - name: twitter:title
    content: Blockchain ← Decentralized Applications
  - name: twitter:description
    content: learn how to write decentralized web applications for smart contracts
  - name: twitter:image
    content: https://ico.tatiblockchain.co.za/img/tati-image.jpg
---

# Decentralized Applications

Decentralized applications are the interface between your blockchain assets and your users. A good smart contract needs a method of interaction, your users will not go to Remix to interact with the smart contract, you need to build a customized user interface - which calls your smart contract functions and displays the results from the contract.
There are two distinct steps to follow after writing your solidity code - Remix does this in the background without your intervention, but to write a customized application, you need to implement these steps manually.

First we need to compile our solidity code, the compiler will output two different codes - The Contract ByteCode and Contract Interface. The contract byte-code is what gets deployed to the blockchain, the contract interface is what you use in your application to talk to the contract. Solidity codes are deployed using a specialized solidity compiler.

## Getting Development environment

We are going to use nodejs for our contract deployment, so you need to start by [downloading nodejs](https://nodejs.org/en/download/) from their official website. This will come with the Node Package Manager or npm, that will allow you to install node_modules directly from the command line.

Once you have installed nodejs, you can now start installing the required applications and packaged for our decentralized application.
We will be using VueJs to build our application, so the first thing you will need to install is the vue-cli. Documentation can be found on the [Vue Cli official website](https://cli.vuejs.org/).

Run this command from your command line. You will need sudo command, to install globally on the system.

```sh{4}
sudo npm install -g @vue/cli
```

Once you have the Vue-Cli installed, you can run the following command to create a new project, follow the instructions and you will have a full project template to start building from.

```sh{4}
vue create greeting-project
```

Once you have the project created, run the following commands to set-it up for ethereum development

```sh{4}
cd greeting-project
```

```sh{4}
mkdir ethereum && cd ethereum
```

## Compiling the Solidity Contract

We are now ready to compile and deploy our ethereum solidity contract, in order to do that you will need a couple of dependencies installed, let us install them all at once with the following command.

```sh{4}
npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.34 truffle-hdwallet-provider
```

Let us go through our list of dependencies we are installing

- ganache-cli will be used to create a local blockchain network on our machine for testing purposes, any smart contract must be thoroughly tested before being deployed to the network
- mocha is the testing platform we will use
- solc is the Solidity compiler
- fs-extra is a node module for reading files
- web3 is the ethereum blockchain API we use to communicate with the ethereum blockchain
- truffle is the wallet provider

We are now good to go, let us create the files we will need. We need two js files, you can call them compile.js and deploy.js in the ethereum folder. You also need a folder you can call contracts, inside that folder create a file called HelloBlockchain.sol and paste the solidity contract from Remix. Your folder structure should look like this:

```
ethereum
├── compile.js
├── deploy.js
└── contracts
    └── HelloBlockchain.sol
```

Now we are ready to compile our contract, paste the following code in the compile.js file

```js{4}
const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

//Start by creating a folder for the compiled results, called build (Our compiled files will be stored there)
const buildPath = path.resolve(__dirname, "build");

//make sure we delete any folder that exists in this path
fs.removeSync(buildPath);

//Compile the Solidity Contract, and store results in the path we created above
const contractPath = path.resolve(
  __dirname,
  "contracts",
  "HelloBlockchain.sol"
);
const source = fs.readFileSync(contractPath, "utf8");
const output = solc.compile(source, 1).contracts;

//rebuild the 'build' folder again, making sure its a new directory
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
```

What we are doing here is simple, we are creating a new directory called build, then we are compiling our contract using the solidity compiler (solc) and storing the output in that folder, in a json file. We are also pre-deleting the folder and its contents(if it exists), so if you need to recompile your contract, after making changes to the solidity file, you can run the same code again and the existing file will be replaced with the new one.
You only need to compile your contract once, so run the following command to compile the contract. Make sure you are inside the ethereum folder when you run this command.

```sh{4}
node compile.js
```

After running this command, you will notice a new folder called build, with a json file inside. This is your compiled smart contract code. Do not edit this file directly, always edit the solidity file, then run the compiler again if you want to make changes.

Now we need to run tests, to make sure our contract does what its supposed to do, the test scripts are available in [the github repo](https://github.com/tatiblockchain/greeting-project). We will not cover those details here.

## Deploying the Solidity Contract

We are going to deploy this contract to the Rinkeby Test Network, before we can do that. We need a http-provider for the API. This is someone who is running an ethereum node, connected to Rinkeby Network. If you were running your own node, you could use your IP address.

Since we are not running a node, we will use [Infura](https://infura.io/). Go to their website and open an account, login to the account and go to the dashboard. You can create a new project and name it greeting. You will see three variables, API KEY, API SECRET and ENDPOINT. Use the drop-down menu for ENDPOINT and select Rinkeby, they copy that url - we will need it for deployment.

The code we will use to deploy our contract is shown below:
Enter your own infura link, and 12 word phrase from your ethereum wallet. Yes, you will be charged GAS for deploying the contract :smiley:

```js{4}
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const hello = require("./build/HelloBlockchain.json");

//Define the Wallet Provider
//TODO(Replace the 12 word phrase and INFURA link with your own before running this code)
const provider = new HDWalletProvider(
  "your twelve word phrase goes here",
  "https://rinkeby.infura.io/v3/your-infura-key-goes-here"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(hello.interface))
    .deploy({
      data: "0x" + hello.bytecode
    })
    .send({ gas: "5000000", from: accounts[0] });

  console.log("Our contract was deployed to : ", result.options.address);
};

deploy();
```

Then run the command below - making sure you are still within the ethereum folder. The deployment takes time, first you will see your meta-mask address, that is good. Wait for the script to finish running.

```sh{4}
node deploy.js
```

If all goes well, you should see your contract address, displayed on your terminal.
If there are errors, copy and paste those errors in google, and search for solutions from other developers.
Copy this address in a safe place, there is no other way to recover it. You need the address to start calling functions on the network.

::: tip
Congratulations :tada: :trophy:
You have deployed your contract on Rinkeby Test Network, to deploy to Mainnet - change the INFURA provider from Rinkeby to Mainnet and re-deploy.
:::

We are not going to go in to the details for building the Web-Application, that is beyond smart-contracts and ethereum, the code is however available on [github.](https://github.com/tatiblockchain/greeting-project). You can fork this code and run the application - then go to your browser to see your website.

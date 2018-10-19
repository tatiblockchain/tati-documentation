(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Decentralized applications are the interface between your blockchain assets and your users. A good smart contract needs a method of interaction, your users will not go to Remix to interact with the smart contract, you need to build a customized user interface - which calls your smart contract functions and displays the results from the contract.\nThere are two distinct steps to follow after writing your solidity code - Remix does this in the background without your intervention, but to write a customized application, you need to implement these steps manually.")]),t._v(" "),n("p",[t._v("First we need to compile our solidity code, the compiler will output two different codes - The Contract ByteCode and Contract Interface. The contract byte-code is what gets deployed to the blockchain, the contract interface is what you use in your application to talk to the contract. Solidity codes are deployed using a specialized solidity compiler.")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("We are going to use nodejs for our contract deployment, so you need to start by "),n("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("downloading nodejs"),n("OutboundLink")],1),t._v(" from their official website. This will come with the Node Package Manager or npm, that will allow you to install node_modules directly from the command line.")]),t._v(" "),n("p",[t._v("Once you have installed nodejs, you can now start installing the required applications and packaged for our decentralized application.\nWe will be using VueJs to build our application, so the first thing you will need to install is the vue-cli. Documentation can be found on the "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Cli official website"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Run this command from your command line. You will need sudo command, to install globally on the system.")]),t._v(" "),t._m(2),n("p",[t._v("Once you have the Vue-Cli installed, you can run the following command to create a new project, follow the instructions and you will have a full project template to start building from.")]),t._v(" "),t._m(3),n("p",[t._v("Once you have the project created, run the following commands to set-it up for ethereum development")]),t._v(" "),t._m(4),t._m(5),t._m(6),t._v(" "),n("p",[t._v("We are now ready to compile and deploy our ethereum solidity contract, in order to do that you will need a couple of dependencies installed, let us install them all at once with the following command.")]),t._v(" "),t._m(7),n("p",[t._v("Let us go through our list of dependencies we are installing")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("We are now good to go, let us create the files we will need. We need two js files, you can call them compile.js and deploy.js in the ethereum folder. You also need a folder you can call contracts, inside that folder create a file called HelloBlockchain.sol and paste the solidity contract from Remix. Your folder structure should look like this:")]),t._v(" "),t._m(9),n("p",[t._v("Now we are ready to compile our contract, paste the following code in the compile.js file")]),t._v(" "),t._m(10),n("p",[t._v("What we are doing here is simple, we are creating a new directory called build, then we are compiling our contract using the solidity compiler (solc) and storing the output in that folder, in a json file. We are also pre-deleting the folder and its contents(if it exists), so if you need to recompile your contract, after making changes to the solidity file, you can run the same code again and the existing file will be replaced with the new one.\nYou only need to compile your contract once, so run the following command to compile the contract. Make sure you are inside the ethereum folder when you run this command.")]),t._v(" "),t._m(11),n("p",[t._v("After running this command, you will notice a new folder called build, with a json file inside. This is your compiled smart contract code. Do not edit this file directly, always edit the solidity file, then run the compiler again if you want to make changes.")]),t._v(" "),n("p",[t._v("Now we need to run tests, to make sure our contract does what its supposed to do, the test scripts are available in "),n("a",{attrs:{href:"https://github.com/tatiblockchain/greeting-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("the github repo"),n("OutboundLink")],1),t._v(". We will not cover those details here.")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("We are going to deploy this contract to the Rinkeby Test Network, before we can do that. We need a http-provider for the API. This is someone who is running an ethereum node, connected to Rinkeby Network. If you were running your own node, you could use your IP address.")]),t._v(" "),n("p",[t._v("Since we are not running a node, we will use "),n("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Infura"),n("OutboundLink")],1),t._v(". Go to their website and open an account, login to the account and go to the dashboard. You can create a new project and name it greeting. You will see three variables, API KEY, API SECRET and ENDPOINT. Use the drop-down menu for ENDPOINT and select Rinkeby, they copy that url - we will need it for deployment.")]),t._v(" "),n("p",[t._v("The code we will use to deploy our contract is shown below:\nEnter your own infura link, and 12 word phrase from your ethereum wallet. Yes, you will be charged GAS for deploying the contract 😃")]),t._v(" "),t._m(13),n("p",[t._v("Then run the command below - making sure you are still within the ethereum folder. The deployment takes time, first you will see your meta-mask address, that is good. Wait for the script to finish running.")]),t._v(" "),t._m(14),n("p",[t._v("If all goes well, you should see your contract address, displayed on your terminal.\nIf there are errors, copy and paste those errors in google, and search for solutions from other developers.\nCopy this address in a safe place, there is no other way to recover it. You need the address to start calling functions on the network.")]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("We are not going to go in to the details for building the Web-Application, that is beyond smart-contracts and ethereum, the code is however available on "),n("a",{attrs:{href:"https://github.com/tatiblockchain/greeting-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("github."),n("OutboundLink")],1),t._v(". You can fork this code and run the application - then go to your browser to see your website.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"decentralized-applications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decentralized-applications","aria-hidden":"true"}},[this._v("#")]),this._v(" Decentralized Applications")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getting-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-development-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Development environment")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sudo npm install -g @vue/cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vue create greeting-project\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("cd greeting-project\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mkdir ethereum && cd ethereum\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"compiling-the-solidity-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-solidity-contract","aria-hidden":"true"}},[this._v("#")]),this._v(" Compiling the Solidity Contract")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.34 truffle-hdwallet-provider\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("ganache-cli will be used to create a local blockchain network on our machine for testing purposes, any smart contract must be thoroughly tested before being deployed to the network")]),t._v(" "),n("li",[t._v("mocha is the testing platform we will use")]),t._v(" "),n("li",[t._v("solc is the Solidity compiler")]),t._v(" "),n("li",[t._v("fs-extra is a node module for reading files")]),t._v(" "),n("li",[t._v("web3 is the ethereum blockchain API we use to communicate with the ethereum blockchain")]),t._v(" "),n("li",[t._v("truffle is the wallet provider")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("ethereum\n├── compile.js\n├── deploy.js\n└── contracts\n    └── HelloBlockchain.sol\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"path"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" solc "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"solc"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"fs-extra"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Start by creating a folder for the compiled results, called build (Our compiled files will be stored there)")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buildPath "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"build"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//make sure we delete any folder that exists in this path")]),t._v("\nfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buildPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Compile the Solidity Contract, and store results in the path we created above")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contractPath "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  __dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"contracts"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"HelloBlockchain.sol"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readFileSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contractPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" output "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" solc"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("compile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contracts"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//rebuild the 'build' folder again, making sure its a new directory")]),t._v("\nfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ensureDirSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buildPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" contract "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" output"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("outputJsonSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buildPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contract"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('":"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('".json"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("contract"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("node compile.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"deploying-the-solidity-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-solidity-contract","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying the Solidity Contract")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HDWalletProvider "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"truffle-hdwallet-provider"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Web3 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"web3"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hello "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./build/HelloBlockchain.json"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//Define the Wallet Provider")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//TODO(Replace the 12 word phrase and INFURA link with your own before running this code)")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HDWalletProvider")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"your twelve word phrase goes here"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"https://rinkeby.infura.io/v3/your-infura-key-goes-here"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" web3 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Web3")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deploy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" web3"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAccounts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Attempting to deploy from account: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accounts"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("web3"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Contract")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("parse")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("deploy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"0x"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" hello"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bytecode\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("send")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" gas"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"5000000"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" accounts"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Our contract was deployed to : "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("deploy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("node deploy.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Congratulations 🎉 🏆\nYou have deployed your contract on Rinkeby Test Network, to deploy to Mainnet - change the INFURA provider from Rinkeby to Mainnet and re-deploy.")])])}],!1,null,null,null);e.options.__file="decentralised-applications.md";s.default=e.exports}}]);
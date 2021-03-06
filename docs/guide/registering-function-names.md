# Registering Function Names

## Registering Your Contract’s Method Names

MetaMask uses the parity on-chain registry of function signatures to display method names on the confirm screen. For many common method names, like token methods, this allows MetaMask to successfully look up the method names by their [method signature](https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html). However, sometimes you’re using a method that is not in that on-chain registry, and MetaMask will simply display Unknown Function to the user.

To add your contract’s function names to this registry so it shows in the MetaMask interface, follow the below steps.

1. Go to the mainnet parity signature registration contract on etherscan

2. Connect MetaMask

3. Use etherscan’s write contract feature to input the string value (without quotes or spaces) to the register function

  for example:

  `getOwners()`

  `execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)`

4. Press write

5. Approve the transaction through MetaMask (you only pay gas)

## Verify

``` javascript
web3.sha3('getOwners()') => 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821
```

take the first 10 characters 0xa0e67e2b and input into [this demo app](https://jennypollack.github.io/function_signature_registry/) that checks the on-chain registry (mainnet or rinkeby)

## Alternate steps using [remix.ethereum.org](http://remix.ethereum.org/): 
Paste the contract code from [bokky’s blog post](https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/) into remix

Set the correct compiler version based on the contract.

Use remix’s write functionality to add to the registry.

You can look at the FUNCTIONHASHES section on [remix.ethereum.org](http://remix.ethereum.org/) by loading the signature registry contract, press the Details button on the compile tab.

## Additional Info 
You can also use the [signature registry](https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4) deployed on rinkeby but should note that MetaMask reads from the mainnet eth-method-registry endpoint, regardless of user’s network

[eth-method-registry](https://github.com/MetaMask/eth-method-registry) is used to lookup methods in MetaMask.

This [stack exchange](https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function) answer is a good tldr.
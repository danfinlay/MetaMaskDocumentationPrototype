# Release Notes

### MetaMask Permissions System Delay Retrospective (December 05, 2019)
- Always return Promises from [ethereum.send()](/guide/ethereum-provider.html#ethereum-send-options)
- Stop Reloading the page on network change
- Stop injecting the web3.js API
- Stop emitting `chainIdChanged`, and emit `chainChanged` instead
- Stop supporting some methods under [ethereum._metamask](/guide/experimental-apis.html#ethereum-metamask) (detailed below)

See full release notes [Here](https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a)
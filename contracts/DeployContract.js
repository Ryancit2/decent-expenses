let transaction = ({
    from: window.web3.givenProvider.selectedAddress,
    gasLimit: window.web3.utils.toHex(1000000),
    gasPrice: window.web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: "608060405234801561001057600080fd5b50610c07806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063b7013dc114610046578063e5f3e8f014610064578063ee0ad2a514610080575b600080fd5b61004e61009e565b60405161005b9190610868565b60405180910390f35b61007e6004803603810190610079919061063b565b6100e4565b005b61008861035d565b6040516100959190610826565b60405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b808061012e5750816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b61016d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016490610848565b60405180910390fd5b600060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018315158152509050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610276929190610506565b506040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555050508161030157826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102f69190610995565b925050819055610356565b826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461034f919061093f565b9250508190555b5050505050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156104fd57838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461044790610a53565b80601f016020809104026020016040519081016040528092919081815260200182805461047390610a53565b80156104c05780601f10610495576101008083540402835291602001916104c0565b820191906000526020600020905b8154815290600101906020018083116104a357829003601f168201915b50505050508152602001600282015481526020016003820160009054906101000a900460ff161515151581525050815260200190600101906103be565b50505050905090565b82805461051290610a53565b90600052602060002090601f016020900481019282610534576000855561057b565b82601f1061054d57805160ff191683800117855561057b565b8280016001018555821561057b579182015b8281111561057a57825182559160200191906001019061055f565b5b509050610588919061058c565b5090565b5b808211156105a557600081600090555060010161058d565b5090565b60006105bc6105b7846108a8565b610883565b9050828152602081018484840111156105d457600080fd5b6105df848285610a11565b509392505050565b6000813590506105f681610ba3565b92915050565b600082601f83011261060d57600080fd5b813561061d8482602086016105a9565b91505092915050565b60008135905061063581610bba565b92915050565b60008060006060848603121561065057600080fd5b600084013567ffffffffffffffff81111561066a57600080fd5b610676868287016105fc565b935050602061068786828701610626565b9250506040610698868287016105e7565b9150509250925092565b60006106ae83836107a5565b905092915050565b6106bf816109c9565b82525050565b60006106d0826108e9565b6106da818561090c565b9350836020820285016106ec856108d9565b8060005b85811015610728578484038952815161070985826106a2565b9450610714836108ff565b925060208a019950506001810190506106f0565b50829750879550505050505092915050565b610743816109db565b82525050565b6000610754826108f4565b61075e818561091d565b935061076e818560208601610a20565b61077781610b43565b840191505092915050565b600061078f602a8361092e565b915061079a82610b54565b604082019050919050565b60006080830160008301516107bd60008601826106b6565b50602083015184820360208601526107d58282610749565b91505060408301516107ea6040860182610808565b5060608301516107fd606086018261073a565b508091505092915050565b61081181610a07565b82525050565b61082081610a07565b82525050565b6000602082019050818103600083015261084081846106c5565b905092915050565b6000602082019050818103600083015261086181610782565b9050919050565b600060208201905061087d6000830184610817565b92915050565b600061088d61089e565b90506108998282610a85565b919050565b6000604051905090565b600067ffffffffffffffff8211156108c3576108c2610b14565b5b6108cc82610b43565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061094a82610a07565b915061095583610a07565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561098a57610989610ab6565b5b828201905092915050565b60006109a082610a07565b91506109ab83610a07565b9250828210156109be576109bd610ab6565b5b828203905092915050565b60006109d4826109e7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610a3e578082015181840152602081019050610a23565b83811115610a4d576000848401525b50505050565b60006002820490506001821680610a6b57607f821691505b60208210811415610a7f57610a7e610ae5565b5b50919050565b610a8e82610b43565b810181811067ffffffffffffffff82111715610aad57610aac610b14565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f546865207573657220646f6573206e6f7420686176652073756666696369656e60008201527f742062616c616e63652e00000000000000000000000000000000000000000000602082015250565b610bac816109db565b8114610bb757600080fd5b50565b610bc381610a07565b8114610bce57600080fd5b5056fea2646970667358221220e588ac9fac1fd380cf5035337b5c55b9dfddc03317b1fefb54f6c0f08921480964736f6c63430008010033"
});
window.web3.eth.sendTransaction(transaction);
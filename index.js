const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index,timestamp,data,previousHash=''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.index+this.timestamp+JSON.stringify(this.data)+this.previousHash).toString()
  }

}

class Blockchain {
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0,'8 july 2018','genesis block','0')
  }

  getLatestBlock(){
    return this.chain[this.chain.length-1];
  }

  addBlock(inputBlock){
    inputBlock.previousHash = this.getLatestBlock().hash;
    inputBlock.hash = inputBlock.calculateHash();
    this.chain.push(inputBlock);
  }
}


module.exports = {
  Block,
  Blockchain
};

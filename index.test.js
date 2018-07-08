const expect = require('chai').expect
const BlockFunctions = require('./index');
const Block = BlockFunctions.Block;
const Blockchain = BlockFunctions.Blockchain;

describe('the Block should',()=>{
  let newBlock0 = new Block(1,"01 july 2018",{amount:4},"1234")
  let newBlock1 = new Block(1,"01 july 2018",{amount:4},"1235")

  it('successfully create a new block',()=>{
    expect(JSON.stringify(newBlock0)).to.equal('{"index":1,"timestamp":"01 july 2018","data":{"amount":4},"previousHash":"1234","hash":"ef443690ca83d954bae91c51ecd07e91fd8959809639840c424c749ba0db5a37"}')
  })
  it('assign hash to new block',()=>{
    expect(newBlock0.hash).to.not.equal('');
    expect(newBlock1.hash).to.not.equal('');
  })

  it('hash is unique',()=>{
    expect(newBlock0.hash).to.equal('ef443690ca83d954bae91c51ecd07e91fd8959809639840c424c749ba0db5a37')
    expect(newBlock1.hash).to.not.equal('ef443690ca83d954bae91c51ecd07e91fd8959809639840c424c749ba0db5a37')

    expect(newBlock0.hash).to.not.equal('fc83a02770ddb28e5cf7a647d4f16b1d4cb9c83038bbeeebf8dd3690eb9b540c')
    expect(newBlock1.hash).to.equal('fc83a02770ddb28e5cf7a647d4f16b1d4cb9c83038bbeeebf8dd3690eb9b540c')
  })
})

describe('the Blockchain should',()=>{
  it('create a genesis block',()=>{
    let myCoin = new Blockchain();
    const genesisBlockTemplate = {
       index: 0,
       timestamp: '8 july 2018',
       data: 'genesis block',
       previousHash: '0',
       hash: '22535b454cf279f06c86c8e5c7bf43df609d482836befb4fc5dee8595a956dce' };
    myCoin.createGenesisBlock();

    expect(myCoin.chain[0].data).to.equal('genesis block');
    expect(myCoin.chain[0].hash).to.equal('22535b454cf279f06c86c8e5c7bf43df609d482836befb4fc5dee8595a956dce');
  })
})

describe('justinCoin should',()=>{

  it('should add new blocks',()=>{

    const justinCoin = new Blockchain();
    justinCoin.createGenesisBlock();
    justinCoin.addBlock(2,'9 july 2018','3',justinCoin.chain[0].hash);
    justinCoin.addBlock(2,'10 july 2018','5',justinCoin.chain[1].hash)
    // console.log('justinCoin.chain[1]',justinCoin.chain[1])

    // expect(justinCoin)

  })

})

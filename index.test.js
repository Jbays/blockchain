const expect = require('chai').expect
const Block = require('./index');

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


  // it('keep a history of transactions (in form of array)',()=>{
  //   expect(Array.isArray(newCoin.chain)).to.equal(true);
  // })

  // describe('add new blocks',()=>{
  // })

})

// describe('the Blockchain should',()=>{})

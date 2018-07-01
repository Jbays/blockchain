const expect = require('chai').expect
const Block = require('./index');

describe('the block function should',()=>{

  it('create a new block',()=>{
    let newBlock = new Block(1,"01 july 2018",{amount:4},"1234")

    expect(JSON.stringify(newBlock)).to.equal('{"index":1,"timestamp":"01 july 2018","data":{"amount":4},"previousHash":"1234","hash":""}')
  })

  // it('keep a history of transactions (in form of array)',()=>{
  //   expect(Array.isArray(newCoin.chain)).to.equal(true);
  // })

  // describe('add new blocks',()=>{
  // })

})

const expect = require('chai').expect
const Blockchain = require('./index');

describe('a blockchain should',()=>{
  let newCoin = new Blockchain();
  newCoin.addBlock(1,"01 july 2018",{amount:4})
  newCoin.addBlock(2,"02 july 2018",{amount:2})
  newCoin.addBlock(3,"05 july 2018",{amount:3})

  it('have a history of transactions (in form of array)',()=>{
    expect(Array.isArray(newCoin.chain)).to.equal(true);
  })

  // describe('add new blocks',()=>{
  //   it('should keep values',()=>{
  //   })
  //   it('should have a time stamp',()=>{
  //   })
  // })

})

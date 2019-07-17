var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 and 4', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('it can subtract 4 from 7', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can divide 21 by 7', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can concatenate multiple numbers clicked ', function(){
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(9)
    assert.strictEqual(calculator.runningTotal, 349)
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(6)
    calculator.operatorClick('*')
    calculator.numberClick(6)
    calculator.operatorClick('/')
    calculator.numberClick(6)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 6)
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(6)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })



});

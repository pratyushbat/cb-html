const mocha = require('mocha');
const chai =  require("fix-esm").require('chai');
const fareUtils = require('../fareutils');

var expect = chai.expect;

describe('fareUtils', () => {
    it('expect fair to be 50 for 0 km,0min', () => {
        let fare = fareUtils.calcFare(0, 0);
        expect(fare).to.equal(50)
    })
    it('expect fair to be 100 for 10 km,0min', () => {
        let fare = fareUtils.calcFare(10, 0);
        expect(fare).to.equal(100)
    })
      it('expect fair to be 56 for 2 km,18min', () => {
        let fare = fareUtils.calcFare(2, 18);
        expect(fare).to.equal(56)
    })
})
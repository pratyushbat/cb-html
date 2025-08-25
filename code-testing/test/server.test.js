
const mocha = require('mocha');
const chai = require("fix-esm").require('chai');
const request = require('request');
var expect = chai.expect;

const app = require('../server');
let server;

describe('server', () => {

    before((done) => {
        server = app.listen(2222, done);
    })

    it('rates should be correct', (done) => {
        request.get('http://localhost:2222/rate', (err, resp, body) => {
            let rates = JSON.parse(body);
            expect(rates.fixed).to.equal(50);
            expect(rates.minkm).to.equal(5);
            done();
        })
    });
    after(() => {
        server.close();
    })

})
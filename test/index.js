var chai = require('chai');
var expect = chai.expect;
var index = require('../');
 
describe('index.js', function() {
 it('returns hello world', function() {
 	expect(index()).to.equal('hello world');
 });
});
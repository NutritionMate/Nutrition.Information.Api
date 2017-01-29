import chai = require("chai");
let expect = chai.expect;
import Index from "../index";

describe("index.ts", function() {
    describe("helloWorld()", function() {
        it("returns hello world", function() {
            let index = new Index();
            expect(index.helloWorld()).to.equal("hello world");
        });
    });
});
import chai = require("chai");
let expect = chai.expect;
import sinon = require("sinon");
import Context from "../../util/context";
import Ping = require("../../../src/lambda/ping");

describe("ping.ts", async function() {

    let sinonSandbox: sinon.SinonSandbox = sinon.sandbox.create();
    let consoleSpy: sinon.SinonSpy;
    let contextSucceedSpy: sinon.SinonSpy;

    beforeEach(async function() {
        consoleSpy = sinonSandbox.spy(console, "log");
        contextSucceedSpy = sinonSandbox.spy(Context.prototype, "succeed");
    });

    afterEach(async function() {
        sinonSandbox.restore();
    });

    describe("handler(event, context)", async function() {
        it("logs the event", async function() {
            let event = "event";
            let context = new Context();
            Ping.handler(event, context);
            expect(consoleSpy.calledOnce).to.be.true;
            expect(consoleSpy.args[0][0]).to.be.deep.equal(event);
        });

        it("calls context.succeed(resonse?: any)  once", async function() {
            let event = null;
            let context = new Context();
            Ping.handler(event, context);
            expect(contextSucceedSpy.calledOnce).to.be.true;
        });

        it("returns statusCode 200", async function() {
            let responseStatusCode = 200;
            let expectedPingResponse = {
                statusCode: responseStatusCode
            };

            let event = null;
            let context = new Context();
            Ping.handler(event, context);

            expect(context.getSucceedResult()).to.deep.equal(expectedPingResponse);
            expect(contextSucceedSpy.args[0][0]).to.be.deep.equal(expectedPingResponse);
        });
    });
});
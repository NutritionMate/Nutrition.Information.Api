import { binding, given, when, then } from "cucumber-tsflow";
import chai = require("chai");
let expect = chai.expect;
import rp = require("request-promise");

@binding()
class PingSteps {
    private pingResponse: any;

    @given(/Nutrition.Information.Api is deployed/)
    public async givenNutritionInformationApiDeployed(): Promise<void> {
        // It is expected Nutrition.Information.Api is deployed by other means
    }

    @when(/a request is sent to \/v1\/ping/)
    public async whenPingRequestSent(): Promise<void> {
        let pingOptions = {
            uri: "<Insert URI to Ping endpoint>",
            resolveWithFullResponse: true
        };

        this.pingResponse = await rp(pingOptions);
    }

    @then(/a response with a status 200 and empty body is returned/)
    public async thenPingResponseReceived(): Promise<void> {
        expect(this.pingResponse.statusCode).to.be.equal(200);
        expect(this.pingResponse.body).to.be.deep.equal("");
    }
}

export = PingSteps;
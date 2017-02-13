import { binding, given, when, then } from "cucumber-tsflow";
import chai = require("chai");
let expect = chai.expect;
import rp = require("request-promise");

@binding()
class PingSteps {
    private readonly nutritionInformationApiUri: string = "<Insert URI to Ping endpoint>";
    private v1PingResponse: any;

    @given(/Nutrition.Information.Api is deployed/)
    public async givenNutritionInformationApiDeployed(): Promise<void> {
        let apiPingUri: string = this.nutritionInformationApiUri + "/ping";
        let apiPingOptions = {
            uri: apiPingUri,
            resolveWithFullResponse: true
        };

        let apiPingResponse = await rp(apiPingOptions);
        expect(apiPingResponse.statusCode).to.be.equal(200);
    }

    @when(/a request is sent to \/v1\/ping/)
    public async whenPingRequestSent(): Promise<void> {
        let v1PingUri: string = this.nutritionInformationApiUri + "/default/v1/ping";
        let v1PingOptions = {
            uri: v1PingUri,
            resolveWithFullResponse: true
        };

        this.v1PingResponse = await rp(v1PingOptions);
    }

    @then(/a response with a status 200 and empty body is returned/)
    public async thenPingResponseReceived(): Promise<void> {
        expect(this.v1PingResponse.statusCode).to.be.equal(200);
        expect(this.v1PingResponse.body).to.be.deep.equal("");
    }
}

export = PingSteps;
Feature: Ping
   As a maintainer or client of the Nutrition Information API, I want a ping endpoint, so I can determine whether the Nutrition Information API is deployed

   Scenario: Successful Ping
      Given Nutrition.Information.Api is deployed
      When a request is sent to /v1/ping
      Then a response with a status 200 and empty body is returned
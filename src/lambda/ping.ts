class Ping {
    static handler(event: any, context: any) {
        console.log(event);

        let responseStatusCode = 200;
        let response = {
            statusCode: responseStatusCode
        };

        return context.succeed(response);
    }
}

export = Ping;
export default class Context {
    private _succeedResult?: any;

    public getSucceedResult(): any {
        return this._succeedResult;
    }

    public succeed(result?: any) {
        this._succeedResult = result;
    }
}
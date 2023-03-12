declare const JwtAccessStrategy_base: new (...args: any[]) => any;
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    constructor();
    validate(payload: any): {
        email: any;
        id: any;
        age: number;
    };
}
export {};

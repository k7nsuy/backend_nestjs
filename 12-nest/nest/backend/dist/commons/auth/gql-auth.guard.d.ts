import { ExecutionContext } from '@nestjs/common';
declare const GqlAccessGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAccessGuard extends GqlAccessGuard_base {
    getRequest(context: ExecutionContext): any;
}
declare const GqlAuthRefreshGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthRefreshGuard extends GqlAuthRefreshGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};

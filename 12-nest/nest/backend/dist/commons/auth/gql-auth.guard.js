"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthRefreshGuard = exports.GqlAccessGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
class GqlAccessGuard extends (0, passport_1.AuthGuard)('access') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlAccessGuard = GqlAccessGuard;
class GqlAuthRefreshGuard extends (0, passport_1.AuthGuard)('refresh') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlAuthRefreshGuard = GqlAuthRefreshGuard;
//# sourceMappingURL=gql-auth.guard.js.map
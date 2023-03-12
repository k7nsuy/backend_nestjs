"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const drivers_1 = require("@nestjs/apollo/dist/drivers");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const boards_module_1 = require("./apis/boards/boards.module");
const board_entity_1 = require("./apis/boards/entities/board.entity");
const products_entity_1 = require("./apis/products/entities/products.entity");
const productsCategory_entity_1 = require("./apis/productsCategory/entities/productsCategory.entity");
const productsSaleslocation_entity_1 = require("./apis/productsSaleslocation/entities/productsSaleslocation.entity");
const users_entity_1 = require("./apis/users/entities/users.entity");
const productCategory_module_1 = require("./apis/productsCategory/productCategory.module");
const products_module_1 = require("./apis/products/products.module");
const graphql_1 = require("@nestjs/graphql");
const productTags_entity_1 = require("./apis/productsTags/productTags.entity");
const user_module_1 = require("./apis/users/user.module");
const auth_module_1 = require("./apis/auth/auth.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            boards_module_1.BoardModule,
            products_module_1.ProductModule,
            productCategory_module_1.ProductCategoryModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            graphql_1.GraphQLModule.forRoot({
                driver: drivers_1.ApolloDriver,
                autoSchemaFile: 'src/commons/graphql/schema.gql',
                context: ({ req, res }) => ({ req, res }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'It123451!',
                database: 'codecamp',
                entities: [
                    board_entity_1.Board,
                    products_entity_1.Product,
                    productsCategory_entity_1.ProductCategory,
                    productsSaleslocation_entity_1.ProductSaleslocation,
                    productTags_entity_1.ProductTag,
                    users_entity_1.User,
                ],
                synchronize: true,
                logging: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
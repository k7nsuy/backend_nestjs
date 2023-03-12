"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const graphql_1 = require("@nestjs/graphql");
const productsCategory_entity_1 = require("../../productsCategory/entities/productsCategory.entity");
const productTags_entity_1 = require("../../productsTags/productTags.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
const productsSaleslocation_entity_1 = require("../../productsSaleslocation/entities/productsSaleslocation.entity");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isSoldout", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => productsSaleslocation_entity_1.ProductSaleslocation),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => productsSaleslocation_entity_1.ProductSaleslocation),
    __metadata("design:type", productsSaleslocation_entity_1.ProductSaleslocation)
], Product.prototype, "productSaleslocation", void 0);
__decorate([
    (0, graphql_1.Field)(() => productsCategory_entity_1.ProductCategory),
    (0, typeorm_1.ManyToOne)(() => productsCategory_entity_1.ProductCategory),
    __metadata("design:type", productsCategory_entity_1.ProductCategory)
], Product.prototype, "productCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => users_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User),
    __metadata("design:type", users_entity_1.User)
], Product.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => productTags_entity_1.ProductTag, (productTags) => productTags.products),
    (0, graphql_1.Field)(() => [productTags_entity_1.ProductTag]),
    __metadata("design:type", Array)
], Product.prototype, "productTags", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Product);
exports.Product = Product;
//# sourceMappingURL=products.entity.js.map
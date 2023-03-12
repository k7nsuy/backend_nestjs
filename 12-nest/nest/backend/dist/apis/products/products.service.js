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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const products_entity_1 = require("./entities/products.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const productsSaleslocation_entity_1 = require("../productsSaleslocation/entities/productsSaleslocation.entity");
const productTags_entity_1 = require("../productsTags/productTags.entity");
let ProductService = class ProductService {
    constructor(productRepository, productSaleslocationRepository, productTagRepository) {
        this.productRepository = productRepository;
        this.productSaleslocationRepository = productSaleslocationRepository;
        this.productTagRepository = productTagRepository;
    }
    async findAll() {
        return await this.productRepository.find({
            relations: ['productSaleslocation', 'productCategory', 'productTags'],
        });
    }
    async findOne({ productId }) {
        return await this.productRepository.findOne({
            where: { id: productId },
            relations: ['productSaleslocation', 'productCategory', 'productTags'],
        });
    }
    async create({ createProductInput }) {
        const { productSaleslocation, productCategotyId, productTags } = createProductInput, product = __rest(createProductInput, ["productSaleslocation", "productCategotyId", "productTags"]);
        const result = await this.productSaleslocationRepository.save(Object.assign({}, productSaleslocation));
        const result2 = [];
        for (let i = 0; i < productTags.length; i++) {
            const tagName = productTags[i].replace('#', '');
            const checkTag = await this.productTagRepository.findOne({
                where: { name: tagName },
            });
            if (checkTag) {
                result2.push(checkTag);
            }
            else {
                const newTag = await this.productTagRepository.save({ name: tagName });
                result2.push(newTag);
            }
        }
        const result3 = await this.productRepository.save(Object.assign(Object.assign({}, product), { productSaleslocation: result, productCategory: { id: productCategotyId }, productTags: result2 }));
        return result3;
    }
    async update({ productId, updateProductInput }) {
        const myProduct = await this.productRepository.findOne({
            where: { id: productId },
        });
        const newProduct = Object.assign(Object.assign(Object.assign({}, myProduct), { id: productId }), updateProductInput);
        return await this.productRepository.save(newProduct);
    }
    async checkSoldOut({ productId }) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
        });
        if (product.isSoldout) {
            throw new common_1.UnprocessableEntityException('Sold out');
        }
    }
    async delete({ productId }) {
        const result = await this.productRepository.softDelete({ id: productId });
        return result.affected ? true : false;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_2.InjectRepository)(productsSaleslocation_entity_1.ProductSaleslocation)),
    __param(2, (0, typeorm_2.InjectRepository)(productTags_entity_1.ProductTag)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map
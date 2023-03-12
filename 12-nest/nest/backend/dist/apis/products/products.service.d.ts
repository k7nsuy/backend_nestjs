import { Product } from './entities/products.entity';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductTag } from '../productsTags/productTags.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly productSaleslocationRepository;
    private readonly productTagRepository;
    constructor(productRepository: Repository<Product>, productSaleslocationRepository: Repository<ProductSaleslocation>, productTagRepository: Repository<ProductTag>);
    findAll(): Promise<Product[]>;
    findOne({ productId }: {
        productId: any;
    }): Promise<Product>;
    create({ createProductInput }: {
        createProductInput: any;
    }): Promise<any>;
    update({ productId, updateProductInput }: {
        productId: any;
        updateProductInput: any;
    }): Promise<any>;
    checkSoldOut({ productId }: {
        productId: any;
    }): Promise<void>;
    delete({ productId }: {
        productId: any;
    }): Promise<boolean>;
}

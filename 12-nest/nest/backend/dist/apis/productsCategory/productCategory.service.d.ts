import { ProductCategory } from './entities/productsCategory.entity';
import { Repository } from 'typeorm';
export declare class ProductCategoryService {
    private readonly productCategoryRepository;
    constructor(productCategoryRepository: Repository<ProductCategory>);
    create({ name }: {
        name: any;
    }): Promise<{
        name: any;
    } & ProductCategory>;
}

import { ProductCategoryService } from './productCategory.service';
import { ProductCategory } from './entities/productsCategory.entity';
export declare class ProductCategoryResolver {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
    createProductCategory(name: string): Promise<{
        name: any;
    } & ProductCategory>;
}

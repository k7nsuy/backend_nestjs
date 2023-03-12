import { ProductService } from './products.service';
import { Product } from './entities/products.entity';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    fetchProducts(): Promise<Product[]>;
    fetchProduct(productId: string): Promise<Product>;
    createProduct(createProductInput: CreateProductInput): Promise<any>;
    updateProduct(productId: string, updateProductInput: UpdateProductInput): Promise<any>;
    deleteProduct(productId: string): Promise<boolean>;
}

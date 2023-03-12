import { ProductSaleslocationInput } from 'src/apis/productsSaleslocation/entities/dto/productSaleslocation.input';
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSaleslocation: ProductSaleslocationInput;
    productCategotyId: string;
    productTags: string[];
}

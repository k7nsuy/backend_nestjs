import { ProductCategory } from 'src/apis/productsCategory/entities/productsCategory.entity';
import { ProductTag } from 'src/apis/productsTags/productTags.entity';
import { User } from 'src/apis/users/entities/users.entity';
import { ProductSaleslocation } from '../../productsSaleslocation/entities/productsSaleslocation.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    isSoldout: boolean;
    deletedAt: Date;
    productSaleslocation: ProductSaleslocation;
    productCategory: ProductCategory;
    user: User;
    productTags: ProductTag[];
}

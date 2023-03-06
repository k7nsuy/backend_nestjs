import { Module } from "@nestjs/common";
import { ProductCategoryResolver } from "./productCategory.resolver";
import { ProductCategoryService } from "./productCategory.service";

@Module({
    providers: [
        ProductCategoryResolver,
        ProductCategoryService
    ]
})
export class ProductCategoryModule {
    
}
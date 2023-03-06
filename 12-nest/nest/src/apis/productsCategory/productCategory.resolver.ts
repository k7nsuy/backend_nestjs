import { ProductCategoryService } from './productCategory.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProductCategory } from './entities/productsCategory.entity';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory)
  createProductCategory(@Args('name') name: string) {
    return this.productCategoryService.create({ name });
  }
}

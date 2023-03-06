import { ProductService } from './products.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Product } from './entities/products.entity';
import { CreateProductInput } from './dto/createProduct.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create({ createProductInput });
  }
}

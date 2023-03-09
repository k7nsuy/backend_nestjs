import { InputType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ProductSaleslocationInput } from 'src/apis/productsSaleslocation/entities/dto/productSaleslocation.input';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productsSaleslocation.entity';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => ProductSaleslocationInput)
  productSaleslocation: ProductSaleslocationInput;

  productCategotyId: string;
}

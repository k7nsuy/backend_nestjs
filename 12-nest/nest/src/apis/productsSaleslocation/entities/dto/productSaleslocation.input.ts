import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../productsSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {}

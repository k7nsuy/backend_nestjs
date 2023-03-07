import { InputType, Field, Int, PartialType, OmitType, PickType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
    

    // PickType(CreateProductInput, ['name', 'price'])
    // OmitType(CreateProductInput, ['description'])
    
}

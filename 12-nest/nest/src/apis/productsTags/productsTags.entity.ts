import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/entities/products.entity';

@Entity()
@ObjectType()
export class ProductsTags {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Product])
  @ManyToMany(() => Product, (product) => product.productTags)
  products: Product[];
}

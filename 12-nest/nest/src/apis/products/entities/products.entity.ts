import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategory/entities/productsCategory.entity';
import { ProductsTags } from 'src/apis/productsTags/productsTags.entity';
import { User } from 'src/apis/users/users.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductSaleslocation } from '../../productsSaleslocation/entities/productsSaleslocation.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Int)
  @Column()
  price: number;

  @Field(() => Boolean)
  @Column({ default: false })
  isSoldout: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => ProductSaleslocation)
  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @Field(() => ProductCategory)
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field(() => ProductsTags)
  @JoinTable()
  @ManyToMany(() => ProductsTags, (productsTags) => productsTags.products)
  productTags: ProductsTags[];
}

import { ProductCategory } from 'src/apis/productsCategory/productsCategory.entity';
import { ProductsTags } from 'src/apis/productsTags/productsTags.entity';
import { User } from 'src/apis/users/users.entity';
import {
  Column,
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
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductsTags, (productsTags) => productsTags.products)
  productTags: ProductsTags[];
}

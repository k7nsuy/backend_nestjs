import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductResolver } from './products.resolver';
import { ProductService } from './products.service';
import { Product } from './entities/products.entity';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductTag } from '../productsTags/productTags.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductSaleslocation, ProductTag]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

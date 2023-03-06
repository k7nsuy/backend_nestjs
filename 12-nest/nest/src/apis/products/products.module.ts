import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductResolver } from './products.resolver';
import { ProductService } from './products.service';
import { Product } from './entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

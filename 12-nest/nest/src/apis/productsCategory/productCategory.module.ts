import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategoryService } from './productCategory.service';
import { ProductCategory } from './entities/productsCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [ProductCategoryResolver, ProductCategoryService],
})
export class ProductCategoryModule {}

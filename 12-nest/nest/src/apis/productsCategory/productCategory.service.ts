import { ProductCategory } from './entities/productsCategory.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  create({ name }) {
    const result = this.productCategoryRepository.save({ name });
    console.log(result);
    return result;
  }
}

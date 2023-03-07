import { Product } from './entities/products.entity';
import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find()
  }

  async findOne({productId}) {
    return await this.productRepository.findOne({where: {id: productId}})
  }

  async create({ createProductInput }) {
    const result = await this.productRepository.save({
      ...createProductInput,

      // 하나 하나 직접 나열하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    });
    return result;
  }

  async update({productId, updateProductInput}) {
    const myProduct = await this.productRepository.findOne({
      where: {id: productId}
    })

    const newProduct = {
      ...myProduct,
      id: productId,
      ...updateProductInput,
    }
    return await this.productRepository.save(newProduct)
  }

  async checkSoldOut({productId}) {
    const product = await this.productRepository.findOne({where: {id: productId}})
    if(product.isSoldout) {
      throw new UnprocessableEntityException('Sold out')
    }
    // if(product.isSoldout) {
    //   throw new HttpException('이미 판매 완료 된 상품입니다.', HttpStatus.UNPROCESSABLE_ENTITY)
    // }
  }
}

import { Product } from './entities/products.entity';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productsSaleslocation.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory'],
    });
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory'],
    });
  }

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // const result = await this.productRepository.save({
    //   ...createProductInput,

    //   // 하나 하나 직접 나열하는 방식
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,
    // });

    // 2. 상품과 상품거래 위치 같이 등록
    const { productSaleslocation, productCategotyId, ...product } =
      createProductInput;
    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    const result2 = await this.productRepository.save({
      ...product,
      productSaleslocation: result, // result 통째로 넣기 vs id만 넣기
      productCategory: { id: productCategotyId },
    });

    return result2;
  }

  async update({ productId, updateProductInput }) {
    const myProduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    const newProduct = {
      ...myProduct,
      id: productId,
      ...updateProductInput,
    };
    return await this.productRepository.save(newProduct);
  }

  async checkSoldOut({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (product.isSoldout) {
      throw new UnprocessableEntityException('Sold out');
    }
    // if(product.isSoldout) {
    //   throw new HttpException('이미 판매 완료 된 상품입니다.', HttpStatus.UNPROCESSABLE_ENTITY)
    // }
  }

  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false

    // 2. 소프트 삭제(직접 구현) - isDeleted
    // this.productRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제(직접 구현) - deletedAt
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });

    // 4. 소프트 삭제(TypeORM 제공) - softRemove - id로만 삭제 가능
    // this.productRepository.softRemove({ id: productId });

    // 4 . 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}

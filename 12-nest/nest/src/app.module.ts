import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { Product } from './apis/products/entities/products.entity';
import { ProductCategory } from './apis/productsCategory/entities/productsCategory.entity';
import { ProductSaleslocation } from './apis/productsSaleslocation/entities/productsSaleslocation.entity';
import { User } from './apis/users/users.entity';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductTag } from './apis/productsTags/productTags.entity';

@Module({
  imports: [
    BoardModule,
    ProductModule,
    ProductCategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'It123451!',
      database: 'codecamp',
      entities: [
        Board,
        Product,
        ProductCategory,
        ProductSaleslocation,
        ProductTag,
        User,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}

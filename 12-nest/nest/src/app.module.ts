import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { Product } from './apis/products/entitles/products.entity';
import { ProductCategory } from './apis/productsCategory/productsCategory.entity';
import { ProductSaleslocation } from './apis/productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductsTags } from './apis/productsTags/productsTags.entity';
import { User } from './apis/users/users.entity';

@Module({
  imports: [
    BoardModule,
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
        ProductsTags,
        User,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
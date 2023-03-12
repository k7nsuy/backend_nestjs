import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { Product } from './apis/products/entities/products.entity';
import { ProductCategory } from './apis/productsCategory/entities/productsCategory.entity';
import { ProductSaleslocation } from './apis/productsSaleslocation/entities/productsSaleslocation.entity';
import { User } from './apis/users/entities/users.entity';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductTag } from './apis/productsTags/productTags.entity';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BoardModule,
    ProductModule,
    ProductCategoryModule,
    UserModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
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

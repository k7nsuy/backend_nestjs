import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductSaleslocation {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  addressDetail: string;

  @Field(() => Float)
  @Column()
  lat: number;

  @Field(() => Float)
  @Column()
  lng: number;

  @Field(() => Date)
  @Column()
  meetingTime: Date;
}

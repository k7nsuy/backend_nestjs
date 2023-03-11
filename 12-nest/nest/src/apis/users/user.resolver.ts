import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/users.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.create({
      email,
      hspassword: hashedPassword,
      name,
      age,
    });
  }

  @UseGuards(GqlAccessGuard)
  @Query(() => String)
  fetchUser(@CurrentUser() currentUser: any) {
    console.log('fetch 실행');
    console.log('User Information, ' + JSON.stringify(currentUser));

    return 'fetch 실행 완료';
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { LoginType } from './dto/login-user.dto';
import { LoginInput } from './inputs/login.input';
import { UserInput } from './inputs/user.input';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Mutation(() => UserType)
  async register(@Args('input') input: UserInput) {
    return this.userService.register(input);
  }

  @Query(() => LoginType)
  async jwt(@Args('input') input: LoginInput) {
    const jwt = await this.userService.getToken(input);
    return {
      jwt,
    };
  }

  @Query(() => UserType)
  async user(@Args('id') id: string) {
    return await this.userService.getUserById(id);
  }
}

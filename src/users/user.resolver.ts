import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './dto/create-user.dto';
import { Login } from './dto/login-user.dto';
import { LoginInput } from './inputs/login.input';
import { UserInput } from './inputs/user.input';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Mutation(() => User)
  async register(@Args('input') input: UserInput) {
    return this.userService.register(input);
  }

  @Query(() => Login)
  async jwt(@Args('input') input: LoginInput) {
    const jwt = await this.userService.getToken(input);
    return {
      jwt,
    };
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return await this.userService.getUserById(id);
  }
}

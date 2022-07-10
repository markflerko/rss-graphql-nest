import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(() => UserType)
  async user(@Args('id') id: string) {
    return await this.userService.getUserById(id);
  }
}

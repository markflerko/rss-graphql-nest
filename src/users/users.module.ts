import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3004/v1/users',
    }),
  ],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}

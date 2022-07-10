import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3004/v1/users',
    }),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

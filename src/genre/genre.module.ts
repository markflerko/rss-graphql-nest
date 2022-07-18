import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3001/v1/genres',
    }),
    UsersModule,
  ],
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
  controllers: [],
})
export class GenreModule {}

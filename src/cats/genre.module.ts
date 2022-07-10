import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3001/v1/genres',
    }),
  ],
  providers: [GenreService, GenreResolver],
  controllers: [],
})
export class GenreModule {}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GenreModule } from 'src/genre/genre.module';
import { UsersModule } from 'src/users/users.module';
import { BandResolver } from './band.resolver';
import { BandService } from './band.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3003/v1/bands',
    }),
    UsersModule,
    GenreModule,
  ],
  providers: [BandService, BandResolver],
})
export class BandModule {}

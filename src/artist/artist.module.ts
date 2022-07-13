import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BandModule } from 'src/band/band.module';
import { UsersModule } from 'src/users/users.module';
import { ArtistResolver } from './artist.resolver';
import { ArtistService } from './artist.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3002/v1/artists/',
    }),
    UsersModule,
    BandModule,
  ],
  providers: [ArtistService, ArtistResolver],
})
export class ArtistModule {}

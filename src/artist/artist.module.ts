import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistResolver } from './artist.resolver';
import { ArtistService } from './artist.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3002/v1/artists/',
    }),
  ],
  providers: [ArtistService, ArtistResolver],
})
export class ArtistModule {}

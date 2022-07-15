import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistModule } from 'src/artist/artist.module';
import { BandModule } from 'src/band/band.module';
import { GenreModule } from 'src/genre/genre.module';
import { TrackModule } from 'src/track/track.module';
import { UsersModule } from 'src/users/users.module';
import { FavouritesResolver } from './favourites.resolver';
import { FavouritesService } from './favourites.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3007/v1/favourites/',
    }),
    UsersModule,
    TrackModule,
    BandModule,
    ArtistModule,
    GenreModule,
  ],
  providers: [FavouritesService, FavouritesResolver],
  exports: [FavouritesService],
})
export class FavouritesModule {}

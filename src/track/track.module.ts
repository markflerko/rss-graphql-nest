import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AlbumModule } from 'src/album/album.module';
import { ArtistModule } from 'src/artist/artist.module';
import { BandModule } from 'src/band/band.module';
import { GenreModule } from 'src/genre/genre.module';
import { UsersModule } from 'src/users/users.module';
import { TrackResolver } from './track.resolver';
import { TrackService } from './track.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3006/v1/tracks',
    }),
    UsersModule,
    AlbumModule,
    ArtistModule,
    BandModule,
    GenreModule,
  ],
  controllers: [],
  providers: [TrackService, TrackResolver],
  exports: [TrackService],
})
export class TrackModule {}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistModule } from 'src/artist/artist.module';
import { BandModule } from 'src/band/band.module';
import { GenreModule } from 'src/genre/genre.module';
import { UsersModule } from 'src/users/users.module';
import { AlbumResolver } from './album.resolver';
import { AlbumService } from './album.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3005/v1/albums/',
    }),
    UsersModule,
    BandModule,
    ArtistModule,
    GenreModule,
  ],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}

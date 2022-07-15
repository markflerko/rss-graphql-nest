import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { BandModule } from './band/band.module';
import { FavouritesModule } from './favourites/favourites.module';
import { GenreModule } from './genre/genre.module';
import { TrackModule } from './track/track.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    GenreModule,
    UsersModule,
    ArtistModule,
    BandModule,
    TrackModule,
    AlbumModule,
    FavouritesModule,
  ],
})
export class AppModule {}

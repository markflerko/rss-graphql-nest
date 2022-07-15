import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { AlbumService } from './album.service';
import { Album } from './dto/create-album.dto';
import { DeleteAlbum } from './dto/delete-album.dto';
import { AlbumInput } from './inputs/album.input';

@Resolver((of) => Album)
export class AlbumResolver {
  constructor(
    private albumService: AlbumService,
    private bandService: BandService,
    private artistService: ArtistService,
    private genreService: GenreService,
  ) {}

  @ResolveField()
  async genres(@Parent() album: AlbumInput) {
    const promises = album.genresIds?.map((id) => {
      return this.genreService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async artists(@Parent() album: AlbumInput) {
    const promises = album.artistsIds?.map((id) => {
      return this.artistService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async bands(@Parent() album: AlbumInput) {
    const promises = album.bandsIds?.map((id) => {
      return this.bandService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @Mutation(() => DeleteAlbum)
  async deleteAlbum(@Args('id') id: string) {
    return await this.albumService.delete(id);
  }

  @Query(() => Album)
  async album(@Args('id') id: string) {
    return await this.albumService.findOne(id);
  }

  @Query(() => [Album])
  async albums() {
    return await this.albumService.findAll();
  }

  @Mutation(() => Album)
  async createAlbum(@Args('input') input: AlbumInput) {
    return this.albumService.create(input);
  }

  @Mutation(() => Album)
  async updateAlbum(@Args('id') id: string, @Args('input') input: AlbumInput) {
    return await this.albumService.update(id, input);
  }
}

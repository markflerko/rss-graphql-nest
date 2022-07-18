import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { Track } from './dto/create-track.dto';
import { DeleteTrack } from './dto/delete-track.dto';
import { TrackInput } from './inputs/track.input';
import { TrackService } from './track.service';

@Resolver((of) => Track)
export class TrackResolver {
  constructor(
    private albumService: AlbumService,
    private bandService: BandService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private trackService: TrackService,
  ) {}

  @ResolveField()
  async genres(@Parent() track: TrackInput) {
    const promises = track.genresIds?.map((id) => {
      return this.genreService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async bands(@Parent() track: TrackInput) {
    const promises = track.bandsIds?.map((id) => {
      return this.bandService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async artists(@Parent() track: TrackInput) {
    const promises = track.artistsIds?.map((id) => {
      return this.artistService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async album(@Parent() track: TrackInput) {
    return await this.albumService.findOne(track.albumId);
  }

  @Mutation(() => DeleteTrack)
  async deleteTrack(@Args('id') id: string) {
    return await this.trackService.delete(id);
  }

  @Query(() => Track)
  async track(@Args('id') id: string) {
    return await this.trackService.findOne(id);
  }

  @Query(() => [Track])
  async tracks() {
    return await this.trackService.findAll();
  }

  @Mutation(() => Track)
  async createTrack(@Args('input') input: TrackInput) {
    return this.trackService.create(input);
  }

  @Mutation(() => Track)
  async updateTrack(@Args('id') id: string, @Args('input') input: TrackInput) {
    return await this.trackService.update(id, input);
  }
}

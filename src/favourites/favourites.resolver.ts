import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { TrackService } from 'src/track/track.service';
import { Favourites } from './dto/create-favourites.dto';
import { FavouritesService } from './favourites.service';
import { FavouritesInput } from './inputs/favourites.input';

@Resolver((of) => Favourites)
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private bandService: BandService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private trackService: TrackService,
  ) {}

  @Query(() => Favourites)
  async favourites() {
    return await this.favouritesService.findAll();
  }

  @ResolveField()
  async genres(@Parent() favourites: FavouritesInput) {
    const promises = favourites.genresIds?.map((id) => {
      return this.genreService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async artists(@Parent() favourites: FavouritesInput) {
    const promises = favourites.artistsIds?.map((id) => {
      return this.artistService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async tracks(@Parent() favourites: FavouritesInput) {
    const promises = favourites.tracksIds?.map((id) => {
      return this.trackService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @ResolveField()
  async bands(@Parent() favourites: FavouritesInput) {
    const promises = favourites.bandsIds?.map((id) => {
      return this.bandService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }
}

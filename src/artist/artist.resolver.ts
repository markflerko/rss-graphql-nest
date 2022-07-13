import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BandService } from 'src/band/band.service';
import { ArtistService } from './artist.service';
import { Artist } from './dto/create-artist.dto';
import { DeleteArtist } from './dto/delete-artist.dto';
import { ArtistInput } from './inputs/artist.input';

@Resolver((of) => Artist)
export class ArtistResolver {
  constructor(
    private artistService: ArtistService,
    private bandService: BandService,
  ) {}

  @ResolveField()
  async bands(@Parent() artist: ArtistInput) {
    const promises = artist.bandsIds?.map((id) => {
      return this.bandService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @Mutation(() => DeleteArtist)
  async deleteArtist(@Args('id') id: string) {
    return await this.artistService.delete(id);
  }

  @Query(() => Artist)
  async artist(@Args('id') id: string) {
    return await this.artistService.findOne(id);
  }

  @Query(() => [Artist])
  async artists() {
    return await this.artistService.findAll();
  }

  @Mutation(() => Artist)
  async createArtist(@Args('input') input: ArtistInput) {
    return this.artistService.create(input);
  }

  @Mutation(() => Artist)
  async updateArtist(
    @Args('id') id: string,
    @Args('input') input: ArtistInput,
  ) {
    return await this.artistService.update(id, input);
  }
}

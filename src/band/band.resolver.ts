import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BandService } from './band.service';
import { Band } from './dto/create-band.dto';
import { BandInput } from './inputs/band.input';
import { GenreService } from 'src/genre/genre.service';
import { DeleteBand } from './dto/delete-band.dto';

@Resolver((of) => Band)
export class BandResolver {
  constructor(
    private bandService: BandService,
    private genreService: GenreService,
  ) {}

  @Mutation(() => DeleteBand)
  async deleteBand(@Args('id') id: string) {
    return await this.bandService.delete(id);
  }

  @Query(() => Band)
  async band(@Args('id') id: string) {
    return await this.bandService.findOne(id);
  }

  @ResolveField()
  async genres(@Parent() band: BandInput) {
    const promises = band.genresIds?.map((id) => {
      return this.genreService.findOne(id);
    });

    const result = await Promise.all(promises);

    return result;
  }

  @Query(() => [Band])
  async bands() {
    return await this.bandService.findAll();
  }

  @Mutation(() => Band)
  async createBand(@Args('input') input: BandInput) {
    return this.bandService.create(input);
  }

  @Mutation(() => Band)
  async updateBand(@Args('id') id: string, @Args('input') input: BandInput) {
    return this.bandService.update(id, input);
  }
}

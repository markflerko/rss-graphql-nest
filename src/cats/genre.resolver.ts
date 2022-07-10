import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreType } from './dto/create-genre.dto';
import { GenreService } from './genre.service';
import { GenreInput } from './inputs/genre.input';

@Resolver()
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query(() => [GenreType])
  async genres() {
    return await this.genreService.findAll();
  }

  @Mutation(() => GenreType)
  async createGenre(@Args('input') input: GenreInput) {
    return this.genreService.create(input);
  }
}

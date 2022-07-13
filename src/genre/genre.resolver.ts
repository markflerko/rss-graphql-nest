import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Genre } from './dto/create-genre.dto';
import { DeleteGenre } from './dto/delete-genre.dto';
import { GenreService } from './genre.service';
import { GenreInput } from './inputs/genre.input';

@Resolver()
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query(() => [Genre])
  async genres() {
    return await this.genreService.findAll();
  }

  @Query(() => Genre)
  async genre(@Args('id') id: string) {
    return await this.genreService.findOne(id);
  }

  @Mutation(() => Genre)
  async createGenre(@Args('input') input: GenreInput) {
    return this.genreService.create(input);
  }

  @Mutation(() => DeleteGenre)
  async deleteGenre(@Args('id') id: string) {
    return this.genreService.delete(id);
  }

  @Mutation(() => Genre)
  async updateGenre(@Args('id') id: string, @Args('input') input: GenreInput) {
    return this.genreService.update(id, input);
  }
}

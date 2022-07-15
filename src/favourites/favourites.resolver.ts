import { Resolver } from '@nestjs/graphql';
import { Favourites } from './dto/create-favourites.dto';
import { FavouritesService } from './favourites.service';

@Resolver((of) => Favourites)
export class FavouritesResolver {
  constructor(private favouritesService: FavouritesService) {}
}

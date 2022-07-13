import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BandService } from './band.service';
import { BandType } from './dto/create-band.dto';
import { BandInput } from './inputs/band.input';

@Resolver()
export class BandResolver {
  constructor(private bandService: BandService) {}

  @Mutation(() => BandType)
  async createBand(@Args('input') input: BandInput) {
    return this.bandService.create(input);
  }
}

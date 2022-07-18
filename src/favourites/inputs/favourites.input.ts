import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FavouritesInput {
  @Field(() => String, { nullable: true })
  readonly userId: string;

  @Field(() => [String], { nullable: true })
  readonly artistsIds: string[];

  @Field(() => [String], { nullable: true })
  readonly bandsIds: string[];

  @Field(() => [String], { nullable: true })
  readonly tracksIds: string[];

  @Field(() => [String], { nullable: true })
  readonly genresIds: string[];
}

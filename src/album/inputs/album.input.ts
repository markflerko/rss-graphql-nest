import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AlbumInput {
  @Field(() => String, { nullable: true })
  readonly name: string;

  @Field(() => Int, { nullable: true })
  readonly released: number;

  @Field(() => [String], { nullable: true })
  readonly artistsIds: string[];

  @Field(() => [String], { nullable: true })
  readonly bandsIds: string[];

  @Field(() => [String], { nullable: true })
  readonly trackIds: string[];

  @Field(() => [String], { nullable: true })
  readonly genresIds: string[];

  @Field(() => String, { nullable: true })
  readonly image: string;
}

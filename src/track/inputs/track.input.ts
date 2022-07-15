import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TrackInput {
  @Field(() => String, { nullable: true })
  readonly title: string;

  @Field(() => String, { nullable: true })
  readonly albumId: string;

  @Field(() => [String], { nullable: true })
  readonly artistsIds: string[];

  @Field(() => [String], { nullable: true })
  readonly bandsIds: string[];

  @Field(() => Int, { nullable: true })
  readonly duration: number;

  @Field(() => Int, { nullable: true })
  readonly released: number;

  @Field(() => [String], { nullable: true })
  readonly genresIds: string[];
}

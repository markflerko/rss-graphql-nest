import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GenreType } from 'src/genre/dto/create-genre.dto';

@ObjectType()
export class MemberType {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;
}

@ObjectType()
export class BandType {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;

  @Field(() => String, { nullable: true })
  readonly origin: string;

  @Field(() => [GenreType], { nullable: true })
  readonly genres: GenreType[];

  @Field(() => String, { nullable: true })
  readonly website: string;

  @Field(() => [MemberType], { nullable: true })
  readonly members: MemberType[];
}

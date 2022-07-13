import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Genre } from 'src/genre/dto/create-genre.dto';

@ObjectType()
export class Member {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;
}

@ObjectType()
export class Band {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;

  @Field(() => String, { nullable: true })
  readonly origin: string;

  @Field(() => [Genre], { nullable: true })
  readonly genres: Genre[];

  @Field(() => String, { nullable: true })
  readonly website: string;

  @Field(() => [Member], { nullable: true })
  readonly members: Member[];
}

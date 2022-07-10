import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GenreType {
  @Field(() => ID)
  readonly _id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly country: string;
  @Field(() => Int)
  readonly year: number;
}

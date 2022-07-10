import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GenreInput {
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly country: string;
  @Field(() => Int)
  readonly year: number;
}

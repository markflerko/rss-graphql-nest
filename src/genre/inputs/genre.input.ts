import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GenreInput {
  @Field(() => String, { nullable: true })
  readonly name: string;
  @Field(() => String, { nullable: true })
  readonly description: string;
  @Field(() => String, { nullable: true })
  readonly country: string;
  @Field(() => Int, { nullable: true })
  readonly year: number;
}

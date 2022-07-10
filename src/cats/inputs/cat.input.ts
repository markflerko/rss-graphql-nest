import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}

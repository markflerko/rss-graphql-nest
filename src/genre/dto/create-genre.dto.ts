import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => ID, { nullable: true })
  readonly _id: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly description: string;
  @Field({ nullable: true })
  readonly country: string;
  @Field(() => Int, { nullable: true })
  readonly year: number;
}

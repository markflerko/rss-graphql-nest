import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly firstName: string;

  @Field(() => String, { nullable: true })
  readonly lastName: string;

  @Field(() => String, { nullable: true })
  readonly password: string;

  @Field(() => String, { nullable: false })
  readonly email: string;
}

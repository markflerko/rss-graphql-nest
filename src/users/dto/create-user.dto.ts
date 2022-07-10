import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => String, { nullable: false })
  readonly firstName: string;

  @Field(() => String, { nullable: false })
  readonly lastName: string;

  @Field(() => String, { nullable: false })
  readonly password: string;

  @Field(() => String, { nullable: false })
  readonly email: string;
}

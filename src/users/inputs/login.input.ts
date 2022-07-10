import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String, { nullable: true })
  readonly password: string;

  @Field(() => String, { nullable: true })
  readonly email: string;
}

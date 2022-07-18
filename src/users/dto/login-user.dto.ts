import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Login {
  @Field(() => String, { nullable: true })
  readonly jwt: string;
}

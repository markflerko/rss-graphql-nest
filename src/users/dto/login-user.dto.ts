import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginType {
  @Field(() => String, { nullable: true })
  readonly jwt: string;
}

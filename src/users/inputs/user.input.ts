import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => String, { nullable: true })
  readonly firstName: string;

  @Field(() => String, { nullable: true })
  readonly lastName: string;

  @Field(() => String, { nullable: true })
  readonly password: string;

  @Field(() => String, { nullable: false })
  readonly email: string;

  @Field(() => [String], { nullable: true })
  readonly favouriteArtistIds: string[];
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ArtistInput {
  @Field(() => String, { nullable: true })
  readonly firstName: string;

  @Field(() => String, { nullable: true })
  readonly secondName: string;

  @Field(() => String, { nullable: true })
  readonly middleName: string;

  @Field(() => String, { nullable: true })
  readonly birthDate: string;

  @Field(() => String, { nullable: true })
  readonly birthPlace: string;

  @Field(() => String, { nullable: true })
  readonly country: string;

  @Field(() => [String], { nullable: true })
  readonly instruments: string[];

  @Field(() => [ID], { nullable: true })
  readonly bandsIds: string[];
}

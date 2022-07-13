import { Field, ID, InputType } from '@nestjs/graphql';
import { Member } from '../dto/create-band.dto';

@InputType()
export class MemberInput {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;
}

@InputType()
export class BandInput {
  @Field(() => String, { nullable: true })
  readonly name: string;

  @Field(() => String, { nullable: true })
  readonly origin: string;

  @Field(() => [ID], { nullable: true })
  readonly genresIds: string[];

  @Field(() => String, { nullable: true })
  readonly website: string;

  @Field(() => [MemberInput], { nullable: true })
  readonly members: Member[];
}

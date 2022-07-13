import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Band } from 'src/band/dto/create-band.dto';

@ObjectType()
export class Artist {
  @Field(() => ID, { nullable: true })
  readonly _id: string;

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

  @Field(() => [Band], { nullable: true })
  readonly bands: Band[];
}

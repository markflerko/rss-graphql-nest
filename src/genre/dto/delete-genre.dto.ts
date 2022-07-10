import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteGenre {
  @Field(() => Int, { nullable: true })
  deletedCount: number;

  @Field(() => Boolean, { nullable: true })
  acknowledged: boolean;
}

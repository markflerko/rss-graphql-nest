import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteAlbum {
  @Field(() => Int, { nullable: true })
  deletedCount: number;

  @Field(() => Boolean, { nullable: true })
  acknowledged: boolean;
}

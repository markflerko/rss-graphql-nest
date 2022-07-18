import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Artist } from 'src/artist/dto/create-artist.dto';
import { Band } from 'src/band/dto/create-band.dto';
import { Genre } from 'src/genre/dto/create-genre.dto';
import { Track } from 'src/track/dto/create-track.dto';

@ObjectType()
export class Album {
  @Field(() => ID, { nullable: true })
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly name: string;

  @Field(() => Int, { nullable: true })
  readonly released: number;

  @Field(() => [Artist], { nullable: true })
  readonly artists: Artist[];

  @Field(() => [Band], { nullable: true })
  readonly bands: Band[];

  @Field(() => [Track], { nullable: true })
  readonly tracks: Track[];

  @Field(() => [Genre], { nullable: true })
  readonly genres: Genre[];

  @Field(() => String, { nullable: true })
  readonly image: string[];
}

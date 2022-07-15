import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Album } from 'src/album/dto/create-album.dto';
import { Artist } from 'src/artist/dto/create-artist.dto';
import { Band } from 'src/band/dto/create-band.dto';
import { Genre } from 'src/genre/dto/create-genre.dto';

@ObjectType()
export class Track {
  @Field(() => ID, { nullable: true })
  readonly _id: string;

  @Field(() => String, { nullable: false })
  readonly title: string;

  @Field(() => Album, { nullable: true })
  readonly album: Album;

  @Field(() => [Artist], { nullable: true })
  readonly artists: Artist[];

  @Field(() => [Band], { nullable: true })
  readonly bands: Band[];

  @Field(() => Int, { nullable: true })
  readonly duration: number;

  @Field(() => Int, { nullable: true })
  readonly released: number;

  @Field(() => [Genre], { nullable: true })
  readonly genres: Genre[];
}

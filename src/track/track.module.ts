import { Module } from '@nestjs/common';
import { TrackResolver } from './track.resolver';
import { TrackService } from './track.service';

@Module({
  controllers: [],
  providers: [TrackService, TrackResolver],
})
export class TrackModule {}

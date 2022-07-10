import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArtistService {
  constructor(private readonly httpService: HttpService) {}
}

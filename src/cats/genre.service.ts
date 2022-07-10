import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { GenreType } from './dto/create-genre.dto';
import { GenreInput } from './inputs/genre.input';

@Injectable()
export class GenreService {
  constructor(private readonly httpService: HttpService) {}

  async create(input: GenreInput): Promise<AxiosResponse<GenreType>> {
    return await this.httpService.axiosRef
      .post('', input)
      .then((res) => res.data);
  }

  async findAll(): Promise<AxiosResponse<GenreType[]>> {
    return await this.httpService.axiosRef
      .get('')
      .then((res) => res.data?.items);
  }
}

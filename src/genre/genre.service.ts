import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UsersService } from 'src/users/users.service';
import { GenreType } from './dto/create-genre.dto';
import { GenreInput } from './inputs/genre.input';

@Injectable()
export class GenreService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

  async update(
    id: string,
    input: GenreInput,
  ): Promise<AxiosResponse<GenreType>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .put(`${id}`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async delete(
    id: string,
  ): Promise<AxiosResponse<{ acknowledged: boolean; deletedCount: number }>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .delete(`${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async create(input: GenreInput): Promise<AxiosResponse<GenreType>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .post('', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async findOne(id: string): Promise<AxiosResponse<GenreType>> {
    return await this.httpService.axiosRef.get(`${id}`).then((res) => res.data);
  }

  async findAll(): Promise<AxiosResponse<GenreType[]>> {
    return await this.httpService.axiosRef
      .get('')
      .then((res) => res.data?.items);
  }
}

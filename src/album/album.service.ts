import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UsersService } from 'src/users/users.service';
import { Album } from './dto/create-album.dto';
import { AlbumInput } from './inputs/album.input';

@Injectable()
export class AlbumService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

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

  async findOne(id: string): Promise<AxiosResponse<Album>> {
    return await this.httpService.axiosRef.get(`${id}`).then((res) => res.data);
  }

  async findAll(): Promise<AxiosResponse<Album[]>> {
    return await this.httpService.axiosRef
      .get('')
      .then((res) => res.data?.items);
  }

  async create(input: AlbumInput): Promise<AxiosResponse<Album>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .post('', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async update(id: string, input: AlbumInput): Promise<AxiosResponse<Album>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .put(`${id}`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((res) => res.reason);
  }
}

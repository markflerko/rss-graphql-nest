import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UsersService } from 'src/users/users.service';
import { Track } from './dto/create-track.dto';
import { TrackInput } from './inputs/track.input';

@Injectable()
export class TrackService {
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

  async findOne(id: string): Promise<AxiosResponse<Track>> {
    return await this.httpService.axiosRef.get(`${id}`).then((res) => res.data);
  }

  async findAll(): Promise<AxiosResponse<Track[]>> {
    return await this.httpService.axiosRef
      .get('')
      .then((res) => res.data?.items);
  }

  async create(input: TrackInput): Promise<AxiosResponse<Track>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .post('', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  async update(id: string, input: TrackInput): Promise<AxiosResponse<Track>> {
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

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UsersService } from 'src/users/users.service';
import { PutFavouritesResDto } from './dto/put-favourites-res.dto';
import { PutFavouritesDto } from './dto/put-favourites.dto';

@Injectable()
export class FavouritesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

  async findAll(): Promise<AxiosResponse<PutFavouritesResDto>> {
    return await this.httpService.axiosRef
      .get('')
      .then((res) => res.data?.items);
  }

  async remove(
    id: string,
    input: PutFavouritesDto,
  ): Promise<AxiosResponse<PutFavouritesResDto>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .put('remove', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((res) => res.reason);
  }

  async add(
    id: string,
    input: PutFavouritesDto,
  ): Promise<AxiosResponse<PutFavouritesResDto>> {
    const token = await this.usersService.getToken();

    return await this.httpService.axiosRef
      .put('add', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((res) => res.reason);
  }
}

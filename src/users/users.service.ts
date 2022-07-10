import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async getToken(): Promise<string> {
    return await this.httpService.axiosRef
      .post('login', {
        password: '12345678',
        email: 'markflerko@gmail.com',
      })
      .then((res) => res.data?.jwt);
  }
}
